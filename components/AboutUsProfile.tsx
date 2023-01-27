import Image from "next/image";
import aboutStyles from "../styles/aboutus.module.css";

type propsAbout = {
    name: string, 
    tenSeconds: string,
    linkedIn: string,
    gitHub: string,
    profileImage: string,
}

export function AboutUsProfile({name, tenSeconds, linkedIn, gitHub, profileImage}: propsAbout) {
    return <div className={aboutStyles.profiles}>
    <Image 
      src={profileImage} 
      width={100} 
      height={100} 
      alt={`photo of ${name}`}
      className={aboutStyles.profile_image}
    ></Image>
    <h3>{name}</h3>
    <p>{tenSeconds}</p>
    <div>
           <a href={linkedIn} target="_blank" rel="noreferrer">
           <Image
              src="/linkedin-logo.png"
              alt={`${name} + 's LinkedIn profile`}
              width={30}
              height={30}
            ></Image>
            </a>
            <a href={gitHub} target="_blank" rel="noreferrer">
            <Image
              src="/github-logo.png"
              alt={`${name} + 's GitHub profile`}
              width={30}
              height={30}
            ></Image>
            </a>
          </div>
    </div>
}