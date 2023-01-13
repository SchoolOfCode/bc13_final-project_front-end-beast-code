import { useEffect, useState } from "react"
import styles from "../styles/filterdropdown.module.css"

export default function FilterDropdown({initialFilterOptions} : any){

    const [filterOptions, setFilterOptions] = useState(initialFilterOptions)

    useEffect(() => {
        console.log(filterOptions)
    }, [filterOptions])

    function setDropdown(event : any) : void{
        const newFilterOptions = filterOptions.map((element: { category: string; isOpen: boolean }) => {
            if (event.target.id === element.category) {
                element.isOpen = !element.isOpen
            }
            return element;
        })
        setFilterOptions(newFilterOptions)
    }

    type optionProps = {
        optionText: string
    }

    function Dropdown(){
        return filterOptions.map(
          (
            element: { isOpen: boolean; category: string; options: string[] },
            index: number
          ) =>
            element.isOpen ? (
              <div key={index} className={styles.dropdown_container}>
                <p
                  onClick={() => setDropdown}
                  className={styles.p}
                  id={element.category}
                >
                  {element.category}
                </p>
                <ul data-testid="unordered-list" className={styles.ul}>
                  {element.options.map((option: string, index: number) => (
                    <Option key={index} optionText={option} />
                  ))}
                </ul>
              </div>
            ) : (
              <div key={index} className={styles.dropdown_container}>
                <p
                  onClick={() => setDropdown}
                  className={styles.p}
                  id={element.category}
                >
                  {element.category}
                </p>
              </div>
            )
        );
    }

    function Option({optionText} : optionProps){
        return <>
            <li data-testid="list-item" className={styles.li}>
                <p data-testid="option-text">{optionText}</p>
                <input type="checkbox" data-testid="checkbox"></input>
            </li> 
            </>
    }

    return <Dropdown/>
}