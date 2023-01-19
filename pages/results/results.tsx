import ResultsHeader from "../../components/ResultsHeader"
import ResultsSearchSection from "../../components/ResultsSearchSection"
import styles from "../../styles/resultspage.module.css"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import { filterOptions } from "../../data/filters"
import { filtersObjectType, resultsArrType } from "../../data/types"
import { ParsedUrlQuery } from "querystring"

export default function Results() {
  const [filters, setFilters] = useState(filterOptions)
  const [results, setResults] = useState<resultsArrType>([])
  const router = useRouter();
  const coords = router.query
  const [location, setLocation] = useState(coords)

  // FETCH REQUEST 
  useEffect(() => {
    async function getData() {
      console.log('im the location', location)
      if (location.location !== undefined) {
        const url = `http://localhost:3000/api/router/${location.location[0]},${location.location[1]}`
        console.log('HEY IM THE URL', url)
        const response = await fetch(url)
        const data = await response.json()
        setResults(data.payload)
        console.log('HEY IM THE DATA', data.payload)
      }
    } getData()
  }, [location])

  useEffect(() => {
    console.log('HEY IM RESULTS', results)
  }, [results])

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

    type checkedOpsArrType = {
      category: string;
      options: string | number | (string | number | null)[]
    }[]

    useEffect(() => {
    function findDif() {
      const checkedOps : checkedOpsArrType = filters.map(dd => {
        return {category: dd.category.data,  
                options: dd.options.map(option => option.checked ? option.data : null).filter(item => item !== null )}
        }).filter(element => element.options.length > 0)
        console.log(checkedOps)
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
        />
      </div>
    </>
  );
}
