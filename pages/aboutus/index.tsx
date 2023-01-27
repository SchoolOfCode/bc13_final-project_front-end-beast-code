import styles from "../../styles/aboutus.module.css";
import {AboutUsProfile} from "../../components/AboutUsProfile";
import BarPageHeader from "../../components/BarPageHeader";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

let team: teamType = [
  {fullname: "Keira Stanley", tenSeconds: "I'm a junior full-stack developer with a background in languages and translation and a passion for music. My diverse experiences bring a unique combination of creativity and analytical thinking to my work.", linkedIn: "https://www.linkedin.com/in/keirastanley/", gitHub: "https://github.com/keirastanley", profileImage: "/keira.png"},
  {fullname: "Gregory Rutnam", tenSeconds: "I studied Media and Sociology at uni and for the last few years have worked in everything from teaching to hospitality to construction in a variety of countries around the world.", linkedIn: "https://www.linkedin.com/in/rutnam/", gitHub: "https://github.com/gregrutnam", profileImage: "/greg2.png"},  
  {fullname: "Faseeh Ahmed", tenSeconds: "I'm a recent engineering graduate looking to join an industry where I can continuously learn and develop problem solving skills while still having fun :).", linkedIn: "https://www.linkedin.com/in/faseehahmed/", gitHub: "https://github.com/faseehahmed1", profileImage: "/faseeh.png"},
  {fullname: "Suzi Clark", tenSeconds: "After encountering low-code automation in an Executive Assistant job, I became curious about coding. I studied Literature & Creative Writing - from fixing plot holes to fixing bugs I am passionate about problem solving!", linkedIn: "https://www.linkedin.com/in/susanna-clark-932b52142/", gitHub: "https://github.com/Suzi-Clark", profileImage: "/suzi.png"},
  {fullname: "Rhona Mackay", tenSeconds: "After writing the same letter one too many times in my civil service job, I'm looking for a creative career where I can stretch my problem solving muscles.", linkedIn: "https://www.linkedin.com/in/rhonamackay/", gitHub: "https://github.com/rhonamackay", profileImage: "/rhona.png"},
  {fullname: "Remi Akinfoyeku", tenSeconds: "Hi I'm Remi, I've always been interested in tech and have done a myriad of problem solving jobs so I decided it's time to put 2 and 2 together and persue a career in coding!", linkedIn: "https://www.linkedin.com/in/anthony-akinfoyeku-720846a6/", gitHub: "https://github.com/remiyeku", profileImage: "/remi.png"}
]

type teamType = {fullname: string, tenSeconds: string, linkedIn: string, gitHub: string, profileImage: string}[]

export default function AboutUs() {
  const [animateView, setAnitmateView] = useState(false)

 useEffect(() => {
   const changeColor = () => {
     if (window.scrollY >= 40) {
       setAnitmateView(true);
     } else {
       setAnitmateView(false);
     }
   };
   window.addEventListener("scroll", changeColor);
 }, []);
  return (
    <div className={styles.whole_page}>
        <BarPageHeader />
        <div className={styles.about_us}>
          <div className={styles.about_info}>
            <h1>Meet the Team</h1>
            <hr className={styles.lines}></hr>
          </div>
          <div className={styles.all_profiles}>
            {team.map((each) => (
              <AboutUsProfile
                key={each.fullname}
                profileImage={each.profileImage}
                name={each.fullname}
                tenSeconds={each.tenSeconds}
                linkedIn={each.linkedIn}
                gitHub={each.gitHub}
              />
            ))}
          </div>
          <h1>The Project in Numbers</h1>
          <hr className={styles.lines}></hr>
          <div className={styles.all_stats}>
            <div className={animateView ? styles.stat1animate : styles.stat1}>
              <CountUp
                start={0}
                end={animateView ? 119 : 0}
                delay={0}
                duration={2}
                className={styles.counter}
              ></CountUp>
              +<p>Pull requests on GitHub</p>
            </div>
            <div className={animateView ? styles.stat1animate : styles.stat1}>
              <CountUp
                start={0}
                end={animateView ? 311 : 0}
                delay={0}
                duration={2}
                className={styles.counter}
              ></CountUp>
              +<p>Commits on GitHub</p>
            </div>
            <div className={animateView ? styles.stat1animate : styles.stat1}>
              <CountUp
                start={0}
                end={animateView ? 95 : 0}
                delay={0}
                duration={2}
                className={styles.counter}
              ></CountUp>
              +<p>Trello tickets complete</p>
            </div>
          </div>
          <h1>What we built & Why</h1>
          <hr className={styles.lines}></hr>
          <h3 className={styles.project_description}>
            For the final 4-week project of the SoC bootcamp our team took a
            problem-first approach to ideation:
          </h3>
          <p className={styles.project_description1}>
            We decided to create an app that solves the problem of needing to
            visit several websites and do a frustratingly large number of google
            searches to plan a night out - and still not finding all the
            information required to be sure a bar is right for you!
          </p>
          <p className={styles.project_description2}>
            Using different filters and search capabilities including a map
            feature, Cheers users have all the information they could possibly
            desire at their fingertips - no matter the group, occasion or
            features required.
          </p>
          <h1>Our Tech Stack</h1>
          <hr className={styles.lines}></hr>
          <div className={styles.tech_stack}>
            <p>TypeScript</p>
            <p>JavaScript</p>
            <p>MongoDB</p>
            <p>CSS</p>
            <p>React</p>
            <p>NextJS</p>
            <p>NodeJS</p>
            <p>Cypress</p>
            <p>SuperTest</p>
            <p>Jest</p>
            <p>React Testing Library</p>
          </div>
        </div>
      </div>
  );
}
