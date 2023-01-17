import { MouseEventHandler, useEffect, useState } from "react";
import { filtersArr } from "../data/filters";
import styles from "../styles/filterdropdown.module.css";

type propsObj = {
  initialFilterOptions: filtersArr;
}

export default function FilterDropdown({ initialFilterOptions }: propsObj) {
  const [filterOptions, setFilterOptions] = useState(initialFilterOptions);

  function setCheckbox(event: any){
    filterOptions.map((filter: { options: any[]; }) => filter.options.map((option: { text: any; checked: boolean; }) => {
      if (option.text === event.target.id) {
        option.checked = !option.checked
      }
    }))
  }

  function setDropdown(event: any) {
    const newFilterOptions = filterOptions.map(
      (element: { category: string; options: {text: string, checked: boolean}[]; isOpen: boolean }) => {
        if (event.target.id === element.category) {
          element.isOpen = !element.isOpen;
        }
        return element;
      }
    );
    setFilterOptions(newFilterOptions);
  }

  type optionProps = {
    optionText: string;
    checked: boolean;
  };

  function Option({ optionText, checked }: optionProps) {
    return (
      <>
        <li data-testid="list-item" className={styles.li}>
          <p data-testid="option-text">{optionText}</p>
          <input type="checkbox" data-testid="checkbox" defaultChecked={checked} onClick={setCheckbox} id={optionText}></input>
        </li>
      </>
    );
  }

    return filterOptions.map(
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
    );
  }

