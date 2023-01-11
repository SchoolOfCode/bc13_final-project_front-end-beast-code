import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className="Footer">
      <div className="contact-us-container">
        <h2 data-testid="Contact-us">Contact us</h2>
        <input type='text' placeholder='Full name'/>
        <input type='email' placeholder='Email'/>
        <textarea placeholder='Message' rows={4} cols={30} />
        <button data-testid="Submit Button">Submit</button>
      </div>
      <div className="sitemap-container">
        <h2>Site map</h2>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="socials-container">
        <Image src="/../public/Facebook-icon.png" alt="Facebook icon" width={20} height={20}></Image>
        <Image src="/../public/Twitter-icon.png" alt="Twitter icon" width={20} height={20}></Image>
        <Image data-testid="icon-insta" src="/../public/Instagram-icon.png" alt="Instagram icon" width={20} height={20}></Image>
      </div>
    </div>
  )
}

export default Footer