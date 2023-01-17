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

  // "City" | "Name" | "Cost" | "Description" | "Image" | "Rating" | "Address" | "Features" | "Postcode" | "Hygiene" | "Happy_hr" | "Website" | "Music" |
  //   "Venue_type" | "Other" | "Vibe" | "Who_with" | "location" | 

  type checkedOpsArrType = {
    category: string;
    options: {text: string, checked: boolean}[]
  }[]

  useEffect(() => {
    function findDif() {
      const checkedOps : checkedOpsArrType = filters.map(dd => {
        return {category: dd.category,  
                options: dd.options.filter((option: { checked: boolean }) => option.checked)}
        }).filter(element => element.options.length > 0)
      filterResults(checkedOps)
    }

    function filterResults(checkedOps : checkedOpsArrType) {
        setResults(tempArray)
        const filteredResults = []
        //Loop through the results
        for (let i = 0; i < results.length; i++){
          //Iterate over each object
          for (const property in results[i]){
            //Loop through 
            for (let j = 0; j < checkedOps.length; j++) {
              //Find the object properties that exist in the checkedOps array
              if (checkedOps[j].category === property){
                for (let k = 0 ; k < checkedOps[j].options.length; k++) {
                  if (results[i][property].includes(checkedOps[j].options[k].text)){
                    filteredResults.push(results[i])
                  }
                }
              }
            }
          }
        }
        if (filteredResults.length > 0){
          setResults(filteredResults)
        }
      }
    findDif()
    }, [filters])

    useEffect(() => {
      console.log("HEYYYYYY i'm the new results :)", results)
    }, [results])

  return (
    <>
      <ResultsHeader />
      <div className={styles.results_main}>
        <ResultsSearchSection results={results} filters={filterOptions} setDropdown={setDropdown} setCheckbox={setCheckbox} />
      </div>
    </>
  );
}
