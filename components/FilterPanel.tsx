import { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import FilterDropdown from "./FilterDropdown";
import styles from "../styles/filterpanel.module.css"

export default function FilterPanel({filters, setDropdown, setCheckbox} : any){
    const [state, setState] = useState(false);

    return (
      <div>
        <div className={styles.more_filters_button_div}></div>
        <button
          onClick={() => setState(true)}
          className={styles.filters_button} 
          data-testid="more-filters"
        >
          More Filters
        </button>
        <SlidingPane
          closeIcon={<div data-testid="done-button" className={styles.done_button}>Done</div>}
          isOpen={state}
          title={
            <button data-testid="reset-button" className={styles.reset_button}>
              Reset
            </button>
          }
          className={styles.panel}
          from="left"
          width="350px"
          onRequestClose={() => setState(false)}
          hideHeader
        >
          <div className={styles.buttons_div}>
            <a onClick={() => setState(false)}>
              <div className={styles.done_button}>Done</div>
            </a>
            <a>
              <div className={styles.reset_button}>Reset</div>
            </a>
          </div>
          <div className={styles.dropdown_container}>
            <FilterDropdown filters={filters} setDropdown={setDropdown} setCheckbox={setCheckbox}/>
          </div>
        </SlidingPane>
      </div>
    );
    };



  