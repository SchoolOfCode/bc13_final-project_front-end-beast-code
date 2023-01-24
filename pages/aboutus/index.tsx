import styles from "../../styles/aboutus.module.css";
import Image from "next/image";
import {AboutUsProfile} from "../../components/AboutUsProfile";
import BarPageHeader from "../../components/BarPageHeader";

let team: teamType = [
  {fullname: "Keira Stanley", tenSeconds: "I frequently visit Brazil and support Spurrs"},
  {fullname: "Gregory Rutnam", tenSeconds: "Tabby tiggy would 100% beat Orange Tiggy in a fight"},
  {fullname: "Faseeh Ahmed", tenSeconds: "Say it like you meme it"},
  {fullname: "Suzi Clark", tenSeconds: "You're not wrong Greg"},
  {fullname: "Rhona Mackay", tenSeconds: "Far be Knit for me to forget if I knit or crochet amazing jumpers, but I know I do one or the other..."},
  {fullname: "Anthony Akinfoyeku", tenSeconds: "One day I will have a cat that might be as cool as Orange Tiggy but never as majestic as Tabby Tiggy"}
]

type teamType = {fullname: string, tenSeconds: string}[]

export default function AboutUs() {
  return (
    <div className={styles.About_us}>
      <BarPageHeader/>
      <div className={styles.About_info}>
      <h1>About Us</h1>
      <h2>Meet the &#39;Beast Code&#39; team who created this website:</h2>
      </div>
      <div className={styles.AllProfiles}>
      {team.map((each) => (<AboutUsProfile key={each.fullname} name={each.fullname} tenSeconds={each.tenSeconds}/>))}
      </div>
    </div>
  );
}
