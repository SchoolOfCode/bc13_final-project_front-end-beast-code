import React, { useState, useEffect } from "react";
import ResultCard from "./ResultCard";
import styles from "../styles/barcards.module.css";
import Link from "next/link";
import { resultsArrType } from "../data/types";

type propsObjectType = {
  results: resultsArrType;
  numberOfResults: number;
};


function BarCards({results, numberOfResults}: propsObjectType) {
 const [resultState, setResultState] = useState(results)
 console.log('im the results in BarCard', results)
 console.log('im the resultState in BarCard', resultState)

  function displayResults(number: number) {
    const newResults = results.filter((element, index) => index < number);
    setResultState(newResults);
  }

  useEffect(() => {
    displayResults(numberOfResults);
  }, [numberOfResults]);

  return (
    <div className={styles.outerCardContainer}>
      <div className={styles.cardContainer}>

        {results.slice(0, numberOfResults).map((item, index) => (
          <Link href="/bar/bar" key={index}>

            <ResultCard
              key={index}
              name={item.Name}
              cost={item.Cost}
              description={item.Description}
              image={item.Image}
              distance={item.dist.calculated}
            />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BarCards;
