import styles from "../styles/hero.module.css";
import { useState, useEffect, createContext } from "react";
import Link from 'next/link'

type dataPCType = {
  status: number;
  result: {
    longitude: number;
    latitude: number;
  }

}

export default function Hero() {
  const [location, setLocation] = useState("")
  const [longLat, setLongLat] = useState<number[]>([])
  const [dataValid, setDataValid] = useState<boolean>(false)

  function getLocation(event: React.ChangeEvent<HTMLInputElement>) {
    setLocation(event.target.value.toLowerCase())
    // console.log("this is the event", location)
  }

  useEffect(() => {
    async function validateLocation(input: string) {
      if (input.length >= 6 ) {
        if (input === "london" ) {
          setLongLat([-0.118092, 51.509865])
          console.log('london', longLat)
          setDataValid(true)
        } else if (input === "birmingham") {
          setLongLat([-1.898575, 52.489471])
          console.log('birmingham', longLat)
          setDataValid(true)
        } else if (input === "manchester") {
          setLongLat([-2.244644, 53.483959])
          console.log('manchester', longLat)
          setDataValid(true)
        } else {
            const url = `https://api.postcodes.io/postcodes/${input}`
            const response = await fetch(url + '/validate')
            const data = await response.json()
            console.log('pc validate data', data)
            if (data.result === true) {
                const responsePC = await fetch (url)
                const dataPC: dataPCType = await responsePC.json()
                console.log('pc data', dataPC)
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

  console.log('location', location)
  console.log('longLat', longLat)
  console.log('dataValid', dataValid)

  return (
    <>
      <div data-testid="main-container" className={styles.main_container}>
        <h1 data-testid="title">Raise the bar, sink into the atmosphere</h1>
        <div data-testid="search-container" className={styles.search_container}>
          <input placeholder="Location or Postcode" data-testid="input" onChange={getLocation}></input>
          { dataValid ? (<Link href={{pathname: "/results/results", query: {location: longLat}}}>
            <button data-testid="button" className={styles.search_button}>
              <span>Search</span>
            </button>
          </Link>) :(<div>
            { ((location.length >= 6) && (dataValid === false)) ? 
                <button disabled={true} data-testid="button" className={styles.search_button}>
                  <span>Search</span>
                </button>
            : 
            <button disabled={false} data-testid="button" className={styles.search_button}>
            <span>Search</span>
          </button>
            }
             </div>
          ) }
          {((location.length >= 6) && (dataValid === false)) ? <div className={styles.error_msg}><p>Enter a valid location or postcode</p></div> : null 
          }
        </div>
      </div>
    </>
  );
}
