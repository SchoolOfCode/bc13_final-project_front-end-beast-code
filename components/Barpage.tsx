import Image from "next/image";
import styles from "../styles/barpage.module.css";

export default function BarPageInfo() {
  return (
    <div>
      <div className={styles.bar_image}>
        <Image
          src="https://i.postimg.cc/0QwStdyj/14-remini-enhanced.png"
          alt="Bar image"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className={styles.bar_name}>
        <h2 data-testid="name-of-bar">Patterns</h2>
      </div>
      <div className={styles.main_body}>
        <div className={styles.breakpoints}>
          <div className={styles.bar_description}>
            <p data-testid="bar-description">
              This place is just so much more than your typical boozer, it just
              keeps on giving. Not only have they got a HUGE food menu,
              literally you can eat anything but you can even kick start your
              day with one of their amazing breakfasts.
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
