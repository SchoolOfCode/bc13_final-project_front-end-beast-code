import ResultsHeader from "../../components/ResultsHeader"
import ResultsSearchSection from "../../components/ResultsSearchSection"
import styles from "../../styles/resultspage.module.css"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import { tempArray } from "../../data/temparray"
import { filterOptions as initialFilterOptions } from "../../data/filters"
import { resultsArrType } from "../../data/types"

type propsObj = {
  results: resultsArrType;
}

export default function Results() {
  const [filterOptions, setFilterOptions] = useState(initialFilterOptions)
  const [results, setResults] = useState<resultsArrType>(tempArray)
  const router = useRouter();
  const data = router.query;

  useEffect(() => {
    console.log("This is the data in results", data)
  }, [data])

  function setDropdown(event: any) {
    const newFilterOptions = filterOptions.map(
      (element: { category: string; options: { text: string, checked: boolean }[]; isOpen: boolean }) => {
        if (event.target.id === element.category) {
          element.isOpen = !element.isOpen;
        }
        return element;
      }
    );
    setFilterOptions(newFilterOptions);
  }

  function setCheckbox(event: any) {
    const newFilterOptions = filterOptions.map(
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
    setFilterOptions(newFilterOptions)
  }

  //FETCH REQUEST WOULD HAPPEN HERE 
  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch('api')
  //     const data = await response.json()
  //     setResults(data)
  //   } getData()
  // }, [])

  return (
    <>
      <ResultsHeader />
      <div className={styles.results_main}>
        <ResultsSearchSection results={results} filters={filterOptions} setDropdown={setDropdown} setCheckbox={setCheckbox} />
      </div>
    </>
  );
}

// checked property is in FilterDropdown component file
//