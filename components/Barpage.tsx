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
          <h2 data-testid="name-of-bar">{barInfo.Name}</h2>
        </div>
      </div>
      <div className={styles.main_body}>
        <div className={styles.breakpoints}>
          <div className={styles.bar_description}>
            <p data-testid="bar-description">{barInfo.Description}</p>
          </div>
          <div className={styles.bar_features}>
            <div className={styles.rating_feature}>
              <div className={styles.rating_feature_icon}></div>
              {"★ ".repeat(barInfo.Rating)}
              {"☆ ".repeat(5-(barInfo.Rating))}

              {/* <p>{Number(barInfo.Rating)}</p> */}
            </div>
            {/* leave this out please */}
            {/* <p>{barInfo.Hygiene}</p> */}
            {barInfo.Happy_hr === "" ? null : (
              <div className={styles.happyhr_feature}>
                <div className={styles.happyhr_feature_icon}></div>
                <p>{barInfo.Happy_hr}</p>
              </div>
            )}
            <div className={styles.music_feature}>
              <div className={styles.music_feature_icon}></div>
              {barInfo.Music.map((music, i) => {
                if (i === barInfo.Music.length - 1) {
                  return (
                    <>
                      <p>{music}&nbsp;</p>
                    </>
                  );
                }
                return (
                  <div key={i} style={{ display: "inline-block" }}>
                    <span>{music}, &nbsp;</span>
                  </div>
                );
              })}
            </div>
            <div className={styles.venue_feature}>
              <div className={styles.venue_feature_icon}></div>
              {barInfo.Venue_type.map((venue, i) => {
                if (i === barInfo.Venue_type.length - 1) {
                  return (
                    <>
                      <span>{venue}&nbsp;</span>
                    </>
                  );
                }
                return (
                  <div key={i} style={{ display: "inline-block" }}>
                    <span>{venue}, &nbsp;</span>
                  </div>
                );
              })}
            </div>
            <div className={styles.vibe_feature}>
              <div className={styles.vibe_feature_icon}></div>
              {barInfo.Vibe.map((vibe, i) => {
                if (i === barInfo.Vibe.length - 1) {
                  return (
                    <>
                      <span>{vibe}&nbsp;</span>
                    </>
                  );
                }
                return (
                  <div key={i} style={{ display: "inline-block" }}>
                    <span>{vibe}, &nbsp;</span>
                  </div>
                );
              })}
            </div>
            <div className={styles.with_feature}>
              <div className={styles.with_feature_icon}></div>
              {barInfo.Who_with.slice(0,3).map((who, i) => {
                if (i === 2) {
                  return (
                    <>
                      <span>{who}&nbsp;</span>
                    </>
                  );
                }
                return (
                  <div key={i} style={{ display: "inline-block" }}>
                    <span>{who}, &nbsp;</span>
                  </div>
                );
              })}
            </div>
            <div className={styles.features_feature}>
              <div className={styles.features_feature_icon}></div>
              {barInfo.Features.slice(0, 2).map((features, i) => {
                if (i === 1) {
                  return (
                    <>
                      <span>{features}&nbsp;</span>
                    </>
                  );
                }
                return (
                  <div key={i} style={{ display: "inline-block" }}>
                    <span>{features}, &nbsp;</span>
                  </div>
                );
              })}
            </div>
            <div className={styles.other_feature}>
              <div className={styles.other_feature_icon}></div>
              {barInfo.Other.slice(0, 1).map((other, i) => {
                if (i === 0) {
                  return (
                    <>
                      <span>{other}&nbsp;</span>
                    </>
                  );
                }
                return (
                  <div key={i} style={{ display: "inline-block" }}>
                    <span>{other}, &nbsp;</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
