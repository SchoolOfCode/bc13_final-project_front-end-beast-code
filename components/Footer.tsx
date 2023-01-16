import React from 'react'
import Image from 'next/image'
import styles from "../styles/footer.module.css"

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer_breakpoints}>
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
            <li>• &nbsp; Home</li>
            <li>• &nbsp; About Us</li>
            <li>• &nbsp; Contact Us</li>
          </ul>
        </div>
        <div className={styles.socials_container}>
          <h2>Socials</h2>
          <div className={styles.socials_icons}>
            <Image
              src="/../public/Facebook-icon.png"
              alt="Facebook icon"
              width={40}
              height={40}
            ></Image>
            <Image
              src="/../public/Twitter-icon.png"
              alt="Twitter icon"
              width={40}
              height={40}
            ></Image>
            <Image
              data-testid="icon-insta"
              src="/../public/instagram-icon.png"
              alt="Instagram icon"
              width={40}
              height={40}
            ></Image>
          </div>
        </div>
      </div>
     </div>
  );
}

export default Footer