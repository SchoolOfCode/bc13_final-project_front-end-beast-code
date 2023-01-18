import { MouseEventHandler, useEffect, useState } from "react";
import { filtersArrType } from "../data/types";
import styles from "../styles/filterdropdown.module.css";
import {optionsPropsType} from "../data/types"

type propsObjType = {
  filters: filtersArrType;
  setDropdown: MouseEventHandler<HTMLParagraphElement>;
  setCheckbox: MouseEventHandler<HTMLParagraphElement>;
}

export default function FilterDropdown({ filters, setDropdown, setCheckbox }: propsObjType) {

  function Option({ optionText, checked }: optionsPropsType) {
    return (
      <>
        <li data-testid="list-item" className={styles.li}>
          <p data-testid="option-text">{optionText}</p>
          <input type="checkbox" data-testid="checkbox" defaultChecked={checked} onClick={setCheckbox} id={optionText}></input>
        </li>
      </>
    );
  }

    return <>
    {filters.map(
      (
        element: { isOpen: boolean; category: string; options: string[] | {text: string, checked: boolean}[]},
        index: number
      ) =>
        element.isOpen ? (
          <div key={index} className={styles.dropdown_container}>
            <p onClick={setDropdown} className={styles.p} id={element.category}>
              {element.category}
            </p>
            <div
              onClick={setDropdown}
              id={element.category}
              className={styles.dropdown_icon_click}
            ></div>
            <ul data-testid="unordered-list" className={styles.ul}>
              {element.options.map((option: any, index: number) => (
                <Option key={index} optionText={option.text} checked={option.checked}/>
              ))}
            </ul>
          </div>
        ) : (
          <div key={index} className={styles.dropdown_container}>
            <p onClick={setDropdown} className={styles.p} id={element.category}>
              {element.category}
            </p>
            <div
              onClick={setDropdown}
              id={element.category}
              className={styles.dropdown_icon}
            ></div>
          </div>
        )
    )}
    </>
  }

