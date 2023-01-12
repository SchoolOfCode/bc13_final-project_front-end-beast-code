import Link from "next/link";
import styles from "../styles/ResultsHeader.module.css";
import Image from "next/image";

export default function ResultsHeader() {
  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.logo} data-testid="logo">
          <Link href="/">
            <Image
              src="/../public/Logo.png"
              width={33}
              height={33}
              alt="logo"
            ></Image>
          </Link>
          <strong>Cheers</strong>
        </div>
        <div className={styles.align_input_left}>
          <div className={styles.search_container}>
            <div data-testid="location-pin" className={styles.logo_area}></div>
            <input
              data-testid="location-input"
              placeholder="Location or Postcode"
              className={styles.location_input}
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
