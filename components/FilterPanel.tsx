import { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import FilterDropdown from "./FilterDropdown";
import styles from "../styles/filterpanel.module.css"

export default function FilterPanel({initialFilterOptions} : any){
    const [state, setState] = useState(false);

    return (
        <div>
          <button data-testid="more-filters" onClick={() => setState(true)} className={styles.filters_button}>
            More Filters
          </button>
          <SlidingPane
            closeIcon={<div data-testid="done-button" className={styles.done_button}>Done</div>}
            isOpen={state}
            title={<button data-testid="reset-button" className={styles.reset_button}>
              Reset
              </button>}
            className={styles.panel}
            from="left"
            width="350px"
            onRequestClose={() => setState(false)}
          >
            <div className={styles.dropdown_container}>
                <FilterDropdown initialFilterOptions={initialFilterOptions}/>
            </div>
          </SlidingPane>
        </div>
      );
    };



  