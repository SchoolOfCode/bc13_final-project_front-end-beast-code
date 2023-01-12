import { useState } from "react"
import styles from "../styles/filterdropdown.module.css"

export default function FilterDropdown(){

    const [toggle, setToggle] = useState(false)

    function setDropdown(){
        setToggle(!toggle);
    }

    type optionProps = {
        optionText: string
    }

    function Option({optionText} : optionProps){
        return <>
        <li data-testid="list-item" className={styles.li}>
            <p data-testid="option-text">{optionText}</p>
            <input type="checkbox" data-testid="checkbox"></input>
        </li> 
        </>
    }

    return <div className={styles.dropdown_container}>
        <p onClick={setDropdown} className={styles.p}>Category</p>
        {toggle ? <ul data-testid="unordered-list" className={styles.ul}>
                <Option optionText="Option 1"/>
                <Option optionText="Option 2"/>
                <Option optionText="Option 3"/>
                <Option optionText="Option 4"/>
        </ul> : null}
    </div>
}