import styles from '../styles/LandingHeader.module.css'
import heroImage from '../public/Hero Image.png'
import Image from 'next/image';

export default function LandingHeader() {
    return (
      <>
        <div className={styles.Navbar}>
          <div className={styles.logo} data-testid="logo">
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
            src={"/../public/Hero-Image.png"}
            alt="Hero"
            layout="responsive"
                    width={100}
                    height={100}
           
          ></Image>
        </div>
      </>
    );
}
