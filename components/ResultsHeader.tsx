import Link from "next/link";
import styles from "../styles/ResultsHeader.module.css";
import Image from "next/image";
import { resultsHeaderPropsType, dataPCType } from "../data/types";
import { useEffect, useState } from 'react'

export default function ResultsHeader(props: resultsHeaderPropsType ) {
  const [input, setInput] = useState('')
  const [placeHolderText, setPlaceHolderText] = useState(`${props.location?.searchInputPlaceholder?.charAt(0).toUpperCase()}${props.location?.searchInputPlaceholder?.slice(1)}`)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value.toLowerCase())
  }

  //gets placeholderText from local storage if otherwise undeinfed (ie on page refresh)
  useEffect(() => {
    if (props.location?.searchInputPlaceholder === undefined) {
      const storedPlaceholder = localStorage.getItem('storedPageHeader')
      if (storedPlaceholder !== null) {
        setPlaceHolderText(storedPlaceholder)
      }
    }
  }, [props.location?.searchInputPlaceholder])

  //e is typed as 'any' fix if poss?
  async function handleNewLocation(e: any) {
    if (e.key === 'Enter') {
      if (input === "london" ) {
        const relocation = {...props.location.location, searchInputPlaceholder: 'London', location: ['-0.118092', '51.509865']}
        props.setLocation(relocation)
        setPlaceHolderText('London')
        localStorage.setItem('storedLocation', ['-0.118092', '51.509865'].toString())
        localStorage.setItem('storedPageHeader', 'London')
      } else if (input === "birmingham") {
          const relocation = {...props.location.location, searchInputPlaceholder: 'Birmingham', location: ['-1.898575', '52.489471']}
          props.setLocation(relocation)
          setPlaceHolderText('Birmingham')
          localStorage.setItem('storedLocation', ['-1.898575', '52.489471'].toString())
          localStorage.setItem('storedPageHeader', 'Birmingham')
      } else if (input === "manchester") {
          const relocation = {...props.location.location, searchInputPlaceholder: 'Manchester', location: ['-2.244644', '53.483959']}
          props.setLocation(relocation)
          setPlaceHolderText('Manchester')
          localStorage.setItem('storedLocation', ['-2.244644', '53.483959'].toString())
          localStorage.setItem('storedPageHeader', 'Manchester')
    } else {
        const url = `https://api.postcodes.io/postcodes/${input}`
        const response = await fetch(url + '/validate')
        const data = await response.json()
          if (data.result === true) {
            const responsePC = await fetch (url)
            const dataPC: dataPCType = await responsePC.json()
            console.log('pc data', dataPC)
            const newCoords = [dataPC.result.longitude, dataPC.result.latitude]
            const relocation = {...props.location.location, searchInputPlaceholder: dataPC.result.admin_district, location: newCoords}
            props.setLocation(relocation)
            setPlaceHolderText(dataPC.result.admin_district)
            localStorage.setItem('storedLocation', newCoords.toString())
          localStorage.setItem('storedPageHeader', dataPC.result.admin_district)
            }
        }
    }
  }

  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.logo} data-testid="logo">
          <Link href="/">
            <Image
              src="/Logo.png"
              width={32}
              height={32}
              alt="logo"
              className={styles.logo_icon}
            ></Image>
          </Link>
          <strong>Cheers</strong>
        </div>
        <div className={styles.align_input_left}>
          <div className={styles.search_container}>
            <div data-testid="location-pin" className={styles.logo_area}></div>
            <input
              data-testid="location-input"
              placeholder={placeHolderText}
              className={styles.location_input}
              onChange={handleChange}
              onKeyDown={handleNewLocation}
            ></input>
          </div>
        </div>
        <div className={styles.about_login}>
          <div className={styles.about_us}>
            <h3>
              <a href="#" data-testid="about-us">
                About us
              </a>
            </h3>
          </div>
          <div className={styles.login}>
            <h3>
              <a href="#" data-testid="login">
                Login
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
