import Link from "next/link";
import styles from "../styles/ResultsHeader.module.css"
import Image from "next/image"

export default function ResultsHeader(){
    return (
      
  <>
  <div className={styles.Navbar}>
    <div className={styles.logo} data-testid="logo">
      <Image src='/../public/Logo.png' width={40} height={40} alt='logo'></Image>
      <strong>Cheers</strong>
    </div>
    <div className={styles.search_container}>
          <div data-testid="location-pin" className="logo-area"> location pin icon 
          </div>
          <input data-testid="location-input" placeholder="Location or Postcode" className={styles.location_input}></input>
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

</>)}