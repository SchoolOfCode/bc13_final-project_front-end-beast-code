import { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import FilterDropdown from "./FilterDropdown";
import styles from "../styles/filter_panel.module.css"

export default function FilterPanel({filters, setDropdown, setCheckbox, panelState, setPanelState, resetResults, getFilteredData} : any){

    return (
      <div>
        <SlidingPane
          closeIcon={<div data-testid="close-button" className={styles.done_button}>Done</div>}
          isOpen={panelState}
          title={
            <button data-testid="reset-button" className={styles.reset_button}>
              Reset
            </button>
          }
          className={styles.panel}
          from="left"
          width="350px"
          onRequestClose={() => setPanelState(false)}
          hideHeader
        >
          <div className={styles.buttons_div}>
            <a onClick={() => {setPanelState(false); getFilteredData()}} >
              <div className={styles.done_button}>Done</div>
            </a>
            <a onClick={resetResults}>
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



  