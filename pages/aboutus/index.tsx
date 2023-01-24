import styles from "../../styles/aboutus.module.css";
import Image from "next/image";
import {AboutUsProfile} from "../../components/AboutUsProfile";
import BarPageHeader from "../../components/BarPageHeader";

let team: teamType = [
  {fullname: "Keira Stanley", tenSeconds: "I frequently visit Brazil and support Spurrs", linkedIn: "https://www.linkedin.com/in/keirastanley/", gitHub: "/"},
  {fullname: "Gregory Rutnam", tenSeconds: "Tabby tiggy would 100% beat Orange Tiggy in a fight", linkedIn: "https://www.linkedin.com/in/rutnam/", gitHub: "/"},
  {fullname: "Faseeh Ahmed", tenSeconds: "Say it like you meme it", linkedIn: "https://www.linkedin.com/in/faseehahmed/", gitHub: "/"},
  {fullname: "Suzi Clark", tenSeconds: "You're not wrong Greg", linkedIn: "https://www.linkedin.com/in/susanna-clark-932b52142/", gitHub: "/"},
  {fullname: "Rhona Mackay", tenSeconds: "Far be Knit for me to forget if I knit or crochet amazing jumpers, but I know I do one or the other...", linkedIn: "https://www.linkedin.com/in/rhonamackay/", gitHub: "/"},
  {fullname: "Remi Akinfoyeku", tenSeconds: "One day I will have a cat that might be as cool as Orange Tiggy but never as majestic as Tabby Tiggy", linkedIn: "https://www.linkedin.com/in/anthony-akinfoyeku-720846a6/", gitHub: "/"}
]

type teamType = {fullname: string, tenSeconds: string, linkedIn: string, gitHub: string}[]

export default function AboutUs() {
  return (
    <div className={styles.About_us}>
      <BarPageHeader/>
      <div className={styles.About_info}>
      <h1>About Us</h1>
      <p>Our app, Cheers, removes the frustrations of needing to visit several websites and google to plan a night out - and still not finding all the information required to be sure a bar is right for you!<br/> 
      Using different filters and search capabilities including a map feature, Cheers users have all the information they could possibly want at their fingertips.</p>
      <h2>Meet the &#39;Beast Code&#39; team who created this website:</h2>
      </div>
      <div className={styles.AllProfiles}>
      {team.map((each) => (<AboutUsProfile key={each.fullname} name={each.fullname} tenSeconds={each.tenSeconds} linkedIn={each.linkedIn} gitHub={each.gitHub}/>))}
      </div>
    </div>
  );
}
