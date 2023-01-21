import styles from "../styles/LandingHeader.module.css";
import Image from "next/image";
import Link from "next/link";

export default function LandingHeader() {
  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.logo} data-testid="logo">
          <Image src="/Logo.png" width={33} height={33} alt="logo"></Image>
          <strong>Cheers</strong>
        </div>
        <div className={styles.about_login}>
          <div className={styles.about_us}>
            <h3>
              <a>About us</a>
            </h3>
          </div>
          <div className={styles.login}>
            <h3>
              <a data-testid="login">
                Login
              </a>
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
