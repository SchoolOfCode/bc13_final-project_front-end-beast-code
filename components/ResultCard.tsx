import { JSXElement } from "@babel/types"
import Image from "next/image"
import styles from "../styles/resultcards.module.css"


export type ResultCardProps = {
    name: string,
    cost: number,
    description: string,
    image: string
} 

function Pounds({number} : any){
    let poundStr = ""
    for (let i = 0; i < number; i++){
        poundStr += "£"
    }
    return <p>{poundStr}</p>;
}

export default function ResultCard(props: ResultCardProps){
    
    return <div className={styles.resultCard}> 
        {/* <Image
            src="https://www.thisisansrc.com"
            alt="put an alt here"
            data-testid="image"
            layout="fill"
        /> */}
        <div className={styles.imageStandIn}>
            <img src={props.image} className={styles.image}></img>
        </div>
        <div className={styles.goldRectangle}>
            <h3 data-testid="title">{props.name}</h3>
            <h3>12km</h3>
        </div>
        <p className={styles.description}>{props.description}</p>
        <div className="icons-container" data-testid="container">
            <ul data-testid="unordered-list" className={styles.ul}>
                <li data-testid="list-item">
                    <p data-testid="text">Type of bar</p>
                    <div data-testid="icon">#</div>
                </li>
                <li>
                    <Pounds number={props.cost}/>
                </li>
                <li>
                    <p>Food $</p>
                </li>
                <li>
                    <p>Rating *</p>
                </li>
            </ul>
        </div>
    </div>
}