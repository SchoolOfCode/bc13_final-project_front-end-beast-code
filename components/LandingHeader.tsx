import styles from "../styles/LandingHeader.module.css";
import Image from "next/image";

export default function LandingHeader() {
  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.logo} data-testid="logo">
          <Image src='/../public/Logo.png' width={40} height={40} alt='logo'></Image>
          <strong>Cheers</strong>
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

      <div className={styles.HeroImage}>
        <Image
          src={"/../public/Hero-Image2.png"}
          alt="Hero"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
    </>
  );
}
