import Image from "next/image";
import aboutStyles from "../styles/aboutus.module.css";

type propsAbout = {
    name: string, 
    tenSeconds: string,
}

export function AboutUsProfile({name, tenSeconds}: propsAbout) {
    return <div className={aboutStyles.Profiles}>
    <h3>{name}</h3>
    <Image src="/search-icon.png" width={32} height={32} alt="photo of team member"></Image>
    <p>{tenSeconds}</p>
    </div>
}