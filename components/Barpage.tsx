import Image from "next/image";
import styles from "../styles/barpage.module.css";

export interface Root {
  barInfo: Bar;
}

export interface Bar {
  _id: string;
  City: string;
  Name: string;
  Cost: number;
  Description: string;
  Image: string;
  Rating: number;
  Address: string;
  Postcode: string;
  Hygiene: number;
  Happy_hr: string;
  Website: string;
  Music: string[];
  Venue_type: string[];
  Other: string[];
  Vibe: string[];
  Features: string[];
  Who_with: string[];
  location: Location;
}

export interface Location {
  type: string;
  coordinates: number[];
}

export default function BarPageInfo({ barInfo }: Root) {
  console.log("barInfo made it", barInfo.Image);
  return (
    <div>
      <div className={styles.bar_image}>
        <Image
          src={barInfo.Image}
          alt="Bar image"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 2200px) 100vw,
              (max-width: 2200px) 50vw,
              33vw"
          priority
        ></Image>
      </div>
      <div className={styles.bar_name_container}>
        <div className={styles.bar_name_innerContainer}>
          <h2 data-testid="name-of-bar">Patterns</h2>
        </div>
      </div>
      <div className={styles.main_body}>
        <div className={styles.breakpoints}>
          <div className={styles.bar_description}>
            <p data-testid="bar-description">
              This place is just so much more than your typical boozer, it just
              keeps on giving. Not only have they got a HUGE food menu,
              literally you can eat anything but you can even kick start your
              day with one of their amazing breakfasts. This place is just so
              much more than your typical boozer, it just keeps on giving. Not
              only have they got a HUGE food menu, literally you can eat
              anything but you can even kick start your day with one of their
              amazing breakfasts. This place is just so much more than your
              typical boozer, it just keeps on giving. Not only have they got a
              HUGE food menu, literally you can eat anything but you can even
              kick start your day with one of their amazing breakfasts. This
              place is just so much more than your typical boozer, it just keeps
              on giving. Not only have they got a HUGE food menu, literally you
              can eat anything but you can even kick start your day with one of
              their amazing breakfasts. This place is just so much more than
              your typical boozer, it just keeps on giving. Not only have they
              got a HUGE food menu, literally you can eat anything but you can
              even kick start your day with one of their amazing breakfasts.
            </p>
          </div>
          <div className={styles.bar_features}>
            <ul>
              <li>
                <p data-testid="icon-bar-page">icon goes here</p>
                <p data-testid="icon-description-bar-page">text next to icon</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
