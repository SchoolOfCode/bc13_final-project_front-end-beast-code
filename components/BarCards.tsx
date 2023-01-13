import React from 'react'
import ResultCard from './ResultCard'
import { ResultCardProps } from './ResultCard'
import styles from "../styles/resultcards.module.css"

const DummyData = [
  {
    "name": "Cosy Club",
    "cost": 2,
    "description": "Part of the iconic Corn Exchange, Manchester Cosy Club is a grand affair at the heart of the city centre. With many original historic features...",
    "image": "https://i.postimg.cc/dtK2xXdY/10-remini-enhanced.png",
  },
  {
    "name": "20 Stories",
    "cost": 3,
    "description": "Billed as 'Manchester's highest restaurant', 20 Stories is on top of the No.1 Spinningfields building and boasts stunning views across the city...",
    "image": "https://i.postimg.cc/Dydrkgdb/11-remini-enhanced.png",
  },
  {
    "name": "Alberts Dale",
    "cost": 3,
    "description": "This bohemian bier party palace has all the comforts of a German manor house including roaring fires and long Bavarian wooden tables. Serving the freshest Pilsner this...",
    "image": "https://i.postimg.cc/Y2FN8kvR/12-remini-enhanced.png",
  },
  {
    "name": "Tattu",
    "cost": 1,
    "description": "Heading out in Manchester and getting a tattoo - very different to heading out in Manchester to go to Tattu. One you might regret in the morning, one you most definitely...",
    "image": "https://i.postimg.cc/kGWx5N0z/13-remini-enhanced.png",
  },
  {
    "name": "Noho",
    "cost": 1,
    "description": "We are big fans of bourbon-filled speakeasy Dusk Til Pawn and its super talented cocktail slingers, but its sibling next door Noho gives it a good run for its money...",
    "image": "https://i.postimg.cc/0QwStdyj/14-remini-enhanced.png",
  }
]

function BarCards() {
  return (<div className={styles.cardContainer}>
    {DummyData.map((item: ResultCardProps, index: number) => <ResultCard key={index} name={item.name} cost={item.cost} description={item.description} image={item.image}/>)}
  </div>

  )
}

export default BarCards