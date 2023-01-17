import React, {useState, useEffect} from 'react'
import ResultCard from './ResultCard'
import { ResultCardProps } from './ResultCard'
import styles from "../styles/barcards.module.css"
import Link from 'next/link'
import { resultsArray } from '../pages/results/results'

type propsObject = {results: resultsArray, numberOfResults: number}

function BarCards({results, numberOfResults}: propsObject) {
 const [resultState, setResultState] = useState(results)

  function displayResults(number : number){
    const newResults = results.filter((element, index) => index < number)
    setResultState(newResults)
  }

  return (
    <div className={styles.outerCardContainer}>
      <div className={styles.cardContainer}>
        {resultState.map((item, index) => (
          <Link href="/bar/bar" key={index}>
            <ResultCard
              key={index}
              name={item.Name}
              cost={item.Cost}
              description={item.Description}
              image={item.Image}
            />{" "}
          </Link>
        ))}
      </div>
    </div>
  );

}

export default BarCards