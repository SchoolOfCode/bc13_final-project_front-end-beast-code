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

  return (
    <div className={styles.outerCardContainer}>
      <div className={styles.cardContainer}>

        {results.slice(0, numberOfResults).map((item, index) => (
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
