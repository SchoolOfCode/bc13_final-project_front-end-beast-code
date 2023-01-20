import ResultsHeader from "../../components/ResultsHeader"
import ResultsSearchSection from "../../components/ResultsSearchSection"
import styles from "../../styles/resultspage.module.css"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import { filterOptions } from "../../data/filters"
import { dataObjectType, filtersObjectType, resultsArrType, checkedOpsArrType } from "../../data/types"
import { ParsedUrlQuery } from "querystring"

//localStorage.setItem('pageLoadCount', 0)

//DO NOT DELETE
declare global {
  type TRouter = ReturnType<typeof useRouter> & {
    query: {
      location: string[];
      searchInputPlaceholder: string;
    };
  };
}

export default function Results() {
  const [filters, setFilters] = useState(filterOptions)
  const [results, setResults] = useState<resultsArrType>([])
  const router = useRouter() as TRouter;
  const heroPageQuery = router.query;
  console.log("heroPageUserInput", heroPageQuery);
  const [queryFilters, setQueryFilters] = useState<checkedOpsArrType>([])
  const [location, setLocation] = useState<ParsedUrlQuery & {
    location: string[];
    searchInputPlaceholder: string;}>(heroPageQuery)


  // FETCH REQUEST 
  async function getData() {
    if (location.location !== undefined) {
      const deployed = "https://cheers-bar-finder.onrender.com/"
      const url = `https://cheers-bar-finder.onrender.com/api/router/${location.location[0]},${location.location[1]}`
      const response = await fetch(url)
      const data = await response.json()
      const newResults : resultsArrType = data.payload.map((element: { location: { coordinates: [number, number] } }) => {
        element.location.coordinates = [element.location.coordinates[1], element.location.coordinates[0]]
        return element;
      })
      setResults(newResults)
    }
  }

  useEffect(() => {
     getData()
  }, [location])

  async function getFilteredData() {
    if (location.location !== undefined) {
      const response = await fetch(`https://cheers-bar-finder.onrender.com/api/router/${location.location[0]},${location.location[1]}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            queryFilters
          })
        })
      const data = await response.json()
      const newResults : resultsArrType = data.payload.map((element: { location: { coordinates: [number, number] } }) => {
        element.location.coordinates = [element.location.coordinates[1], element.location.coordinates[0]]
        return element;
      })
      setResults(newResults)
    }
  }

  function setDropdown(event: any) {
    const newFilters = filterOptions.map((element: filtersObjectType) => {
      if (event.target.id === element.category.text) {
        element.isOpen = !element.isOpen;
      }
      else {
        element.isOpen = false;
      }
      return element;
    });
    setFilters(newFilters);
  }

  function setCheckbox(event: any) {
    const newFilters = filterOptions.map((filter: filtersObjectType) => {
      filter.options.map((option: { text: string; checked: boolean }) => {
        if (option.text === event.target.id) {
          option.checked = !option.checked;
        }
        return option;
      });
      return filter;
    });
    setFilters(newFilters);
  }
  
  useEffect(() => {
    function findDif() {
      const checkedOps: checkedOpsArrType = filters
        .map(dd => {
          return {
            category: dd.category.data,
            options: dd.options
              .map(option => option.checked ? option.data : null)
              .filter(item => item !== null),
          };
        })
        .filter(element => element.options.length > 0);
        setQueryFilters(checkedOps)
    }
    findDif();
  }, [filters]);

  return (
    <>
      <ResultsHeader heroPageQuery={heroPageQuery} setLocation={setLocation} location={location} />
      <div className={styles.results_main}>
        <ResultsSearchSection
          results={results}
          filters={filters}
          setDropdown={setDropdown}
          setCheckbox={setCheckbox}
          heroPageQuery={heroPageQuery}
          getData={getData}
          getFilteredData={getFilteredData}
          queryFilters={queryFilters}
        />
      </div>
    </>
  );
}
