import { JSXElement } from "@babel/types";
import Image from "next/image";
import styles from "../styles/barcards.module.css";

export type ResultCardProps = {
  name: string;
  cost: number;
  description: string;
  image: string;
};

function Pounds({ number }: any) {
  let poundStr = "";
  for (let i = 0; i < number; i++) {
    poundStr += "£";
  }
  
  return <p>{poundStr}</p>;
}
// Display only 9 results at a time
// Display only some of the desc
  function Description({description}: any) {
    return  <p className={styles.description}>{description.slice(0, 115)}...</p>

  }
export default function ResultCard(props: ResultCardProps) {
  return (
    <div className={styles.resultCard}>
      <div className={styles.imageStandIn}>
        <Image
          src={props.image}
          alt="Bar image"
          layout="fill"
        ></Image>
      </div>
      <div className={styles.goldRectangle}>
        <div className={styles.bar_name}>
          <h3 data-testid="title">{props.name}</h3>
        </div>
        <h3>12km</h3>
      </div>
      <Description description={props.description} />
      <div className={styles.icons_container} data-testid="container">
        <div className={styles.drinks}>
          <div className={styles.drinks_icon}></div>
          <p>Coctail bar</p>
        </div>
        <div className={styles.cost}>
          <div className={styles.cost_icon}></div>
          <Pounds number={props.cost} />
        </div>
        <div className={styles.food}>
          <div className={styles.food_icon}></div>
          <p>Italian</p>
        </div>
        <div className={styles.reviews}>
          <div className={styles.reviews_icon}></div>
          <p>4.2/5</p>
        </div>
      </div>
    </div>
  );
}
