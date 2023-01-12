import { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import FilterDropdown from "./FilterDropdown";
import styles from "../styles/filterpanel.module.css"

export default function FilterPanel(){
    const [state, setState] = useState(false);

    return (
        <div>
          <button onClick={() => setState(true)}>
            Filters
          </button>
          <SlidingPane
            closeIcon={<div className={styles.done_button}>Done</div>}
            isOpen={state}
            title={<button data-testid="reset-button" className={styles.reset_button}>
              Reset
              </button>}
            className={styles.panel}
            from="left"
            width="350px"
            onRequestClose={() => setState(false)}
          >
            <div>
                <FilterDropdown/>
            </div>
          </SlidingPane>
        </div>
      );
    };



  