import React, { useState, useEffect } from "react";
import ResultCard from "./ResultCard";
import styles from "../styles/barcards.module.css";
import Link from "next/link";
import { resultsArrType } from "../data/types";
import { heroQueryObject } from "../data/types";

type propsObjectType = {
  results: resultsArrType;
  numberOfResults: number;
  heroPageQuery: heroQueryObject;
};

function BarCards({
  results,
  numberOfResults,
  heroPageQuery,
}: propsObjectType) {
  const [resultState, setResultState] = useState(results);

  console.log(
    "heroPageUserInput BarCard",
    heroPageQuery.searchInputPlaceholder
  );

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
        {resultState.map((item, index) => (
          <Link
            href={{
              pathname: "/bar/bar",
              query: {
                location: heroPageQuery.location,
                searchInputPlaceholder: heroPageQuery.searchInputPlaceholder,
              },
            }}
            key={index}
          >
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

export default BarCards;
