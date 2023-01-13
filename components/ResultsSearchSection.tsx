import React from 'react'
import FilterDropdown from './FilterDropdown'
import FilterPanel from "./FilterPanel"
import styles from "../styles/Results-search-section.module.css";
import { useState } from 'react';
import {basicFilterOptions, advancedFilterOptions} from "../data/filters.js"

export default function ResultsSearchSection() {

  const [mapClass, setMapClass] = useState("var(--green)")
  const [listClass, setListClass] = useState("var(--gold)")
  
  function setView(){
    if (mapClass === "var(--green)") {
      setMapClass("var(--gold)")
      setListClass("var(--green)")
    }
    else {
      setMapClass("var(--green)")
      setListClass("var(--gold)")
    }
  }

  return (
    <div>
      {/* Search bar for filtering results by keyword */}
      <div className={styles.keywordsearch_main_container}>
        <div className={styles.icon_input_toggle_container}>
          <div data-testid={"search-icon"} className={styles.search_icon}></div>
          <input
            className={styles.keyword_input}
            type="text"
            placeholder="Search by keyword"
            data-testid="search-input"
          />
          <button className={styles.map_button} style={{ ["background-color" as any]: mapClass }} onClick={setView}>Map View</button>
          <button className={styles.list_button} style={{ ["background-color" as any]: listClass }} onClick={setView}>List View</button>
        </div>
        <div className={styles.gold_underline}></div>
      </div>
        <>
        <div className={styles.dropdown_container}>
            {/* Filter dropdown expands / closes when clicked */}
            <FilterDropdown initialFilterOptions={basicFilterOptions}/>
            <button data-testid="reset-button" className={styles.reset_button}>Reset</button>
        </div>
        {/* Filter panel shows when "filters" button is clicked */}
        <FilterPanel initialFilterOptions={advancedFilterOptions}/> 
        </>
    </div>
  );
}
