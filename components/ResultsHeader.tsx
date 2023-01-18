import Link from "next/link";
import styles from "../styles/ResultsHeader.module.css";
import Image from "next/image";


export default function ResultsHeader({ ...data }) {
  const placeholderText = data.searchInputPlacholder;
  const capitalisePlaceholderText =
    placeholderText.charAt(0).toUpperCase() + placeholderText.slice(1);
  
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
              placeholder={capitalisePlaceholderText}
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
