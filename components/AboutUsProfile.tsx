import Image from "next/image";
import aboutStyles from "../styles/aboutus.module.css";

type propsAbout = {
    name: string, 
    tenSeconds: string,
    linkedIn: string,
    gitHub: string,
}

export function AboutUsProfile({name, tenSeconds, linkedIn, gitHub}: propsAbout) {
    return <div className={aboutStyles.Profiles}>
    <h3>{name}</h3>
    <Image src="/search-icon.png" width={32} height={32} alt="photo of team member"></Image>
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