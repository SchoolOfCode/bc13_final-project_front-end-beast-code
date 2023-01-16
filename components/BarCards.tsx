import React, {useState} from 'react'
import ResultCard from './ResultCard'
import { ResultCardProps } from './ResultCard'
import styles from "../styles/barcards.module.css"
import Link from 'next/link'
import { resultsArray } from '../pages/results/results'

type propsObject = {results: resultsArray}

function BarCards({results}: propsObject) {
 const [resultsArray, setResultsArray] = useState(results)

  return (
    <div className={styles.outerCardContainer}>
      <div className={styles.cardContainer}>
        {resultsArray.map((item, index) => (
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