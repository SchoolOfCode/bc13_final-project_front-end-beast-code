import { JSXElement } from "@babel/types";
import Image from "next/image";
import styles from "../styles/barcards.module.css";

export type propsObjType = {
  name: string;
  cost: number;
  description: string;
  image: string;
  distance: number;
  rating: Number;
  venue: String[];
  vibe: string | string[];
};

function Pounds({ number }: any) {
  let poundStr = "";
  for (let i = 0; i < number; i++) {
    poundStr += "£";
  }
  
  return <p>{poundStr}</p>;
}

export default function ResultCard(props: propsObjType) {
  return (
    <div className={styles.resultCard}>
      <div className={styles.imageStandIn}>
        <Image
          src={props.image}
          alt="Bar image"
          fill
          sizes="(max-width: 2200px) 100vw,
              (max-width: 2200px) 50vw,
              33vw"
        ></Image>
      </div>
      <div className={styles.goldRectangle}>
        <div className={styles.bar_name}>
          <h3 data-testid="title">{props.name}</h3>
        </div>
        <h3>{Math.round((props.distance / 1000) * 10) / 10} km</h3>
      </div>
      <p className={styles.description}>{props.description.slice(0, 115)}...</p>
      <div className={styles.icons_container} data-testid="container">
        <div className={styles.drinks}>
          <div className={styles.drinks_icon}></div>
          <p>{props.venue[0]}</p>
        </div>
        <div className={styles.cost}>
          <div className={styles.cost_icon}></div>
          <Pounds number={props.cost} />
        </div>
        <div className={styles.food}>
          <div className={styles.food_icon}></div>
          <p>{props.vibe[0]}</p>
        </div>
        <div className={styles.reviews}>
          <div className={styles.reviews_icon}></div>
          <p>{`${props.rating}`}</p>
        </div>
      </div>
    </div>
  );
}
