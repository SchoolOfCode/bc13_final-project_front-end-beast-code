import ResultsHeader from "../../components/ResultsHeader"
import ResultsSearchSection from "../../components/ResultsSearchSection"
import styles from "../../styles/resultspage.module.css"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import { tempArray } from "../../data/temparray"
import { filterOptions } from "../../data/filters"
import { resultsArrType } from "../../data/types"

export default function Results() {
  const [filters, setFilters] = useState(filterOptions)
  const [results, setResults] = useState<resultsArrType>(tempArray)
  const router = useRouter();
  const data = router.query;

    //FETCH REQUEST WOULD HAPPEN HERE 
  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch('api')
  //     const data = await response.json()
  //     setResults(data)
  //   } getData()
  // }, [])

  useEffect(() => {
    console.log("This is the data in results", data)
  }, [data])

  function setDropdown(event: any) {
    const newFilters = filterOptions.map(
      (element: { category: string; options: { text: string, checked: boolean }[]; isOpen: boolean }) => {
        if (event.target.id === element.category) {
          element.isOpen = !element.isOpen;
        }
        return element;
      }
    );
    setFilters(newFilters);
  }

  function setCheckbox(event: any) {
    const newFilters = filterOptions.map(
      (filter: { category: string; options: { text: string, checked: boolean }[]; isOpen: boolean }) => {
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

  return (
    <>
      <ResultsHeader {...data} />
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
