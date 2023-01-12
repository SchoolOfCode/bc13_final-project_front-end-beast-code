import React from 'react'
import ResultCard from './ResultCard'
import { ResultCardProps } from './ResultCard'
import styles from "../styles/resultcards.module.css"

const DummyData = [
  {
      "name": "Cosy Club",
      "cost": 2,
      "description": "Part of the iconic Corn Exchange, Manchester Cosy Club is a grand affair at the heart of the city centre. With many original historic features..."
  },
  {
      "name": "Cosy Clubby again",
      "cost": 1,
      "description": "Part of the iconic Corn Exchange, Manchester Cosy Club is a grand affair at the heart of the city centre. With many original historic features..."
  },
  {
      "name": "Cosy Clubby",
      "cost": 1,
      "description": "Part of the iconic Corn Exchange, Manchester Cosy Club is a grand affair at the heart of the city centre. With many original historic features..."
  },
  {
      "name": "Cosy Clubby",
      "cost": 1,
      "description": "Part of the iconic Corn Exchange, Manchester Cosy Club is a grand affair at the heart of the city centre. With many original historic features..."
  },
  {
      "name": "Cosy Clubby ",
      "cost": 1,
      "description": "Part of the iconic Corn Exchange, Manchester Cosy Club is a grand affair at the heart of the city centre. With many original historic features..."
  }
]

function BarCards() {
  return (<div className={styles.cardContainer}>
    {DummyData.map((item: ResultCardProps, index: number)=><ResultCard key={index} name={item.name} cost={item.cost} description={item.description} />)}
    </div>
    
  )
}

export default BarCards