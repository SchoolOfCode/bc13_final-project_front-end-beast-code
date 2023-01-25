import { ChangeEvent, ChangeEventHandler, MouseEventHandler, useEffect } from "react";
import { sortingObjectType } from "../data/types"
import styles from "../styles/sorting_dropdown.module.css"

type propsObjType = {
    setDropdown: MouseEventHandler<HTMLParagraphElement>;
    setRadioCheckbox: MouseEventHandler<HTMLInputElement>;
    sortingObj: sortingObjectType
}

export default function SortingDropdown({setDropdown, setRadioCheckbox, sortingObj} : propsObjType) {

    useEffect(() => {
    console.log(sortingObj)
    }, [sortingObj])

    return <> {sortingObj.isOpen ? (
                    <div className={styles.dropdown_container}>
                        <p onClick={setDropdown}
                            className={styles.p} id={sortingObj.category}>
                            {sortingObj.category}
                        </p>
                        <div
                            onClick={setDropdown}
                            id={sortingObj.category}
                            className={styles.dropdown_icon_click}
                        ></div>
                        <ul data-testid="unordered-list" className={styles.ul}>{sortingObj.options.map(option => 
                            <li data-testid="list-item" className={styles.li} id={option.text}>
                                <p data-testid="option-text" id={option.text}>{option.text}</p>
                                <input type="radio" id={option.text} checked={option.checked} onClick={setRadioCheckbox}></input>
                            </li>
                        )}</ul>
                    </div>
                ) : (
                    <div className={styles.dropdown_container_animation}>
                        <p onClick={setDropdown} className={styles.p} id={sortingObj.category}>
                            {sortingObj.category}
                        </p>
                        <div
                            onClick={setDropdown}
                            id={sortingObj.category}
                            className={styles.dropdown_icon}
                        ></div>
                    </div>
                )
        }
    </>
}

