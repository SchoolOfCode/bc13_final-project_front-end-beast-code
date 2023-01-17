import ResultsHeader from "../../components/ResultsHeader"
import ResultsSearchSection from "../../components/ResultsSearchSection"
import styles from "../../styles/resultspage.module.css"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import {tempArray} from "../../data/temparray"
import { filtersArr, advancedFilterOptions } from "../../data/filters"

export type resultsArray = {
  City: string;
  Name: string;
  Cost: number;
  Description: string;
  Image: string;
  Rating: number;
  Address: string;
  Features: string[];
  Postcode: string;
  Hygiene: number;
  Happy_hr: string;
  Website: string;
  Music: string[];
  Venue_type: string[];
  Other: string[];
  Vibe: string[] | string;
  Who_with: string[];
  location: {
    type: string, 
    coordinates: number[]
  }
}[]

type propsObj = {
  results: resultsArray;
}

export default function Results() {
  const [filterOptions, setFilterOptions] = useState(advancedFilterOptions)
  const [results, setResults] = useState<resultsArray>(tempArray)
  const router = useRouter();
  const data = router.query;

    useEffect(() => {
      console.log("This is the data in results", data)
    }, [data])

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
          <ResultsSearchSection results={results} filters={filterOptions}/>
        </div>
      </>
    );
}

// checked property is in FilterDropdown component file
//