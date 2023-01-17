import styles from "../styles/hero.module.css";
import { useState, useEffect, createContext } from "react";
import Link from 'next/link'

export default function Hero() {
  const [location, setLocation] = useState("")

  //SORT OUT TYPESCRIPT IF POSS
  function getLocation(event : any) {
    setLocation(event.target.value.toLowerCase())
    console.log("this is the event", location)
  }

  return (
    <>
      <div data-testid="main-container" className={styles.main_container}>
        <h1 data-testid="title" className="hero-header">Raise the bar, sink into the atmosphere</h1>
        <div data-testid="search-container" className={styles.search_container}>
          <input placeholder="Location or Postcode" data-testid="input" onChange={getLocation}></input>
          {(location === "london" || location === "birmingham" || location === "manchester") ? (<Link href={{pathname: "/results/results", query: {location: location}}}>
            <button data-testid="button" className={styles.search_button}>
              <span>Search</span>
            </button>
          </Link>) :(<div className={styles.error_msg}>
            <button data-testid="button" className={styles.search_button}>
              <span>Search</span>
            </button>
             <p>Enter a valid location</p>
             </div>
          ) }
        </div>
      </div>
    </>
  );
}
