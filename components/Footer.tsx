import React from 'react'
import Image from 'next/image'
import styles from "../styles/footer.module.css"

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.contact_us_container}>
        <h2 data-testid="Contact-us">Contact us</h2>
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Your Message" rows={4} cols={30} />
        <button data-testid="Submit Button">Submit</button>
      </div>
      <div className={styles.sitemap_container}>
        <h2>Site map</h2>
        <ul>
          <li>• Home</li>
          <li>• About Us</li>
          <li>• Contact Us</li>
        </ul>
      </div>
      <div className={styles.socials_container}>
        <h2>Socials</h2>
        <div className={styles.socials_icons}>
          <Image
            src="/../public/Facebook-icon.png"
            alt="Facebook icon"
            width={50}
            height={50}
          ></Image>
          <Image
            src="/../public/Twitter-icon.png"
            alt="Twitter icon"
            width={50}
            height={50}
          ></Image>
          <Image
            data-testid="icon-insta"
            src="/../public/Instagram-icon.png"
            alt="Instagram icon"
            width={50}
            height={50}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Footer