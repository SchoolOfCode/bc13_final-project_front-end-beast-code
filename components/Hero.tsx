import styles from "../styles/hero.module.css";
import { useState, useEffect, createContext } from "react";
import Link from 'next/link'
import { dataPCType } from "../data/types";

export default function Hero() {
  const [location, setLocation] = useState("")
  const [longLat, setLongLat] = useState<number[]>([])
  const [dataValid, setDataValid] = useState<boolean>(false)
  const [locationForResultsPageHeader, setLocationForResultsPageHeader] =
   useState("");
  
  function getLocation(event: React.ChangeEvent<HTMLInputElement>) {
    const userInput = event.target.value.toLowerCase().replace(/\s/g, '')
    setLocation(userInput)
  }

  useEffect(() => {
    async function validateLocation(input: string) {
      if (input.length >= 6 ) {
        if (input === "london" ) {
          setLongLat([-0.118092, 51.509865])
          setDataValid(true)
          setLocationForResultsPageHeader("london");
        } else if (input === "birmingham") {
          setLongLat([-1.898575, 52.489471])
          setDataValid(true)
          setLocationForResultsPageHeader("birmingham");
        } else if (input === "manchester") {
          setLongLat([-2.244644, 53.483959])
          setDataValid(true)
          setLocationForResultsPageHeader("manchester");
        } else {
            const url = `https://api.postcodes.io/postcodes/${input}`
            const response = await fetch(url + '/validate')
            const data = await response.json()
            if (data.result === true) {
                const responsePC = await fetch (url)
                const dataPC: dataPCType = await responsePC.json()
              setLocationForResultsPageHeader(dataPC.result.admin_district);
                const coords = [dataPC.result.longitude, dataPC.result.latitude]
                setLongLat(coords)
                setDataValid(true)
            } else {
              setDataValid(false)
            }
        }
    } else {
      setDataValid(false)
    }
  }
  validateLocation(location)
  }, [location])

  return (
    <>
      <div data-testid="main-container" className={styles.main_container}>
        <h1 data-testid="title" className="hero-header">
          Raise the bar, sink into the atmosphere
        </h1>
        <div data-testid="search-container" className={styles.search_container}>
          <input
            placeholder="Location or Postcode"
            data-testid="input"
            onChange={getLocation}
          ></input>
          {dataValid ? (
            <Link
              href={{
                pathname: "/results/results",
                query: {
                  location: longLat,
                  searchInputPlaceholder: locationForResultsPageHeader,
                },
              }}
            >
              <button data-testid="button" className={styles.search_button}>
                <span>Search</span>
              </button>
            </Link>
          ) : (
            <div>
              {location.length >= 6 && dataValid === false ? (
                <button
                  disabled={true}
                  data-testid="button"
                  className={styles.search_button}
                >
                  <span>Search</span>
                </button>
              ) : (
                <button
                  disabled={false}
                  data-testid="button"
                  className={styles.search_button}
                >
                  <span>Search</span>
                </button>
              )}
            </div>
          )}
          {location.length >= 6 && dataValid === false ? (
            <div className={styles.error_msg}>
              <p>Enter a valid location or postcode</p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
