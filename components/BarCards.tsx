import React from 'react'
import ResultCard from './ResultCard'
import { ResultCardProps } from './ResultCard'
import styles from "../styles/resultcards.module.css"
import Link from 'next/link'

const DummyData = [
  {
    "name": "Cosy Club",
    "cost": 2,
    "description": "Part of the iconic Corn Exchange, Manchester Cosy Club is a grand affair at the heart of the city centre...",
    "image": "https://i.postimg.cc/dtK2xXdY/10-remini-enhanced.png",
  },
  {
    "name": "20 Stories",
    "cost": 3,
    "description": "Billed as 'Manchester's highest restaurant', 20 Stories is on top of the No.1 Spinningfields building...",
    "image": "https://i.postimg.cc/Dydrkgdb/11-remini-enhanced.png",
  },
  {
    "name": "Alberts Dale",
    "cost": 3,
    "description": "This bohemian bier party palace has all the comforts of a German manor house including roaring fires...",
    "image": "https://i.postimg.cc/Y2FN8kvR/12-remini-enhanced.png",
  },
  {
    "name": "Tattu",
    "cost": 1,
    "description": "Heading out in Manchester and getting a tattoo - very different to heading out in Manchester to go to Tattu...",
    "image": "https://i.postimg.cc/kGWx5N0z/13-remini-enhanced.png",
  },
  {
    "name": "Noho",
    "cost": 1,
    "description": "We are big fans of bourbon-filled speakeasy Dusk Til Pawn and its super talented cocktail slingers...",
    "image": "https://i.postimg.cc/0QwStdyj/14-remini-enhanced.png",
  },
  {
    "name": "Pie and Ale",
    "cost": 2,
    "description": "Split into two zones Pie and Ale is a masterful example of spaces within space. It's cleverly chucked together approach...",
    "image": "https://i.postimg.cc/RhxH26WR/15-remini-enhanced.png",
  }
]

function BarCards() {

  return (
    <div className={styles.cardContainer}>
      {DummyData.map((item: ResultCardProps, index: number) => (
        <Link href="/bar/bar" key={index}>
          <ResultCard
            key={index}
            name={item.name}
            cost={item.cost}
            description={item.description}
            image={item.image}
          />{" "}
        </Link>
      ))}
    </div>
  );

}

export default BarCards