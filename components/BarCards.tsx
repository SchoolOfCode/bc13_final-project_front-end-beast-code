import React from "react";
import ResultCard from "./ResultCard";
import styles from "../styles/bar_cards.module.css";
import Link from "next/link";
import { resultsArrType } from "../data/types";

type propsObjectType = {
  results: resultsArrType;
  displayResultsNumber: number;
  noResults: boolean;
};

function BarCards({results, displayResultsNumber, noResults}: propsObjectType) {

  return (<div className={styles.outerCardContainer}>
      <div className={styles.cardContainer}>
        {noResults ? <h2 className={styles.noResults}>Sorry, no results found :(</h2> : results.slice(0, displayResultsNumber).map((item, index) => (
          <Link href={`/bar/${item._id}`} key={index}>
            <ResultCard
              key={index}
              name={item.Name}
              cost={item.Cost}
              description={item.Description}
              image={item.Image}
              distance={item.dist.calculated}
              rating={item.Rating}
              venue={item.Venue_type}
              vibe={item.Vibe}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BarCards;
