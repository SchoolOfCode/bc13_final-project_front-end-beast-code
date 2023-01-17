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
    console.log('line29', newFilters)
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
    console.log('line 45', newFilters)
    setFilters(newFilters)
  }

  useEffect(() => {
    function findDif() {
      const checkedOps = filters.map((dd) => {
        return {category: dd.category,  
                options: dd.options.filter((option: { checked: boolean }) => option.checked)}
        }).filter((element) => element.options.length > 0)
      console.log('CO', checkedOps)
      filterResults(checkedOps)
    }

    function filterResults(checkedOps: { category: string; options: { text: string; checked: boolean; }[]; }[]) {
        const filteredResults = []

        // for (let i=0; i<checkedOps.length; i++) {
        //   if (checkedOps[i][1].length > 0) {
        //     for (let j=0; j<results.length; j++) {
        //       console.log()
        //       // if (results[j][checkedOps[i][0]])
        //     }
        //   }
        // }
      }
    findDif()
  }, [filters])

  return (
    <>
      <ResultsHeader />
      <div className={styles.results_main}>
        <ResultsSearchSection results={results} filters={filterOptions} setDropdown={setDropdown} setCheckbox={setCheckbox} />
      </div>
    </>
  );
}
