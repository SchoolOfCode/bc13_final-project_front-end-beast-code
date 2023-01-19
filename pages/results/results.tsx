import ResultsHeader from "../../components/ResultsHeader"
import ResultsSearchSection from "../../components/ResultsSearchSection"
import styles from "../../styles/resultspage.module.css"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import { filterOptions } from "../../data/filters"
import { filtersObjectType, resultsArrType, checkedOpsArrType } from "../../data/types"

//localStorage.setItem('pageLoadCount', 0)

export default function Results() {
  const [filters, setFilters] = useState(filterOptions)
  const [results, setResults] = useState<resultsArrType>([])
  const router = useRouter();
  const coords = router.query
  const [location, setLocation] = useState(coords)
  const [queryFilters, setQueryFilters] = useState<checkedOpsArrType>([])

  useEffect(() => {
    console.log(results)
  }, [results])

  // FETCH REQUEST 
  useEffect(() => {
    async function getData() {
      if (location.location !== undefined) {
        const deployed = "https://cheers-bar-finder.onrender.com/"
        const url = `http://localhost:3000/api/router/${location.location[0]},${location.location[1]}`
        const response = await fetch(url)
        const data = await response.json()
        const newResults : resultsArrType = data.payload.map((element: { location: { coordinates: [number, number] } }) => {
          element.location.coordinates = [element.location.coordinates[1], element.location.coordinates[0]]
          return element;
        })
        setResults(newResults)
      }
    } getData()
  }, [location])

  async function getFilteredData() {
    if (location.location !== undefined) {
      const response = await fetch(`http://localhost:3000/api/router/${location.location[0]},${location.location[1]}`,
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
    const newFilters = filterOptions.map(
      (element: filtersObjectType) => {
        if (event.target.id === element.category.text) {
          element.isOpen = !element.isOpen;
        }
        return element;
      }
    );
    setFilters(newFilters);
  }

  function setCheckbox(event: any) {
    const newFilters = filterOptions.map(
      (filter: filtersObjectType) => {
        filter.options.map((option: { text: string; checked: boolean; }) => {
        if (option.text === event.target.id) {
          option.checked = !option.checked
        }
        return option;
      }
      )
      return filter;
      });
    setFilters(newFilters)
  }

    useEffect(() => {
    function findDif() {
      const checkedOps : checkedOpsArrType = filters.map(dd => {
        return {category: dd.category.data,  
                options: dd.options.map(option => option.checked ? option.data : null).filter(item => item !== null )}
        }).filter(element => element.options.length > 0)
        setQueryFilters(checkedOps)
    }
    findDif()
  },[filters])

  return (
    <>
      <ResultsHeader {...coords} />
      <div className={styles.results_main}>
        <ResultsSearchSection
          results={results}
          filters={filters}
          setDropdown={setDropdown}
          setCheckbox={setCheckbox}
          coords={coords}
        />
        <button onClick={getFilteredData}>Apply filter pls</button>
      </div>
    </>
  );
}
