import React from 'react'
import styles from "../styles/ResultsHeader.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BarPageHeader() {
  return (
    <>
      <div className={styles.Navbar}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div className={styles.logo} data-testid="logo">
            <Image
              src="/Logo.png"
              width={32}
              height={32}
              alt="logo"
              className={styles.logo_icon}
            ></Image>
            <strong>Cheers</strong>
          </div>
        </Link>
        <div className={styles.about_login}>
          <div className={styles.about_us}>
            <h3>
              <Link href="/aboutus">
              <p>
                About us
              </p>
              </Link>
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
