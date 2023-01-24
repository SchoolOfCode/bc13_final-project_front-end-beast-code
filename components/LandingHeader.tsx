import styles from "../styles/landing_header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LandingHeader() {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.logo} data-testid="logo">
          <Image src="/Logo.png" width={33} height={33} alt="logo"></Image>
          <strong>Cheers</strong>
        </div>
        <div
          onClick={() => {
            setIsCheck(!isCheck);
          }}
          className={styles.checkbtn}
        ></div>
        <div
          className={isCheck ? styles.about_login_checked : styles.about_login}
        >
          <div className={styles.about_us}>
            <h3>
              <Link href="/aboutus">
               <p>About us</p>
              </Link>
            </h3>
          </div>
          <div className={styles.login}>
            <h3>
              <Link href="/underconstruction" data-testid="login">Login</Link>
            </h3>
          </div>
        </div>
      </div>

      <div className={styles.HeroImage}>
        <Image
          src={"/Hero-Image2.png"}
          alt="Hero"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 2200px) 100vw,
              (max-width: 2200px) 50vw,
              33vw"
        ></Image>
      </div>
    </>
  );
}
