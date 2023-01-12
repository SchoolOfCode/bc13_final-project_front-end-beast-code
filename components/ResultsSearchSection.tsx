import React from 'react'
import FilterDropdown from './FilterDropdown'
import FilterPanel from "./FilterPanel"
import { useState } from 'react'
import styles from '../styles/Results-search-section.module.css'
import Image from 'next/image'

export default function ResultsSearchSection() {

  const [toggle, setToggle] = useState(false)

  function showFilterPanel() {
    console.log("HIIIIIIII")
    setToggle(true)
  }

  function hideFilterPanel(){
    setToggle(false)
  }

  return (
    <div>
      {/* Search bar for filtering results by keyword */}
      <div className={styles.keywordinput_container}>
        <div className={styles.inner_div}>
          <div data-testid={'search-icon'} className={styles.search_icon}></div>
          <input
            className={styles.keyword_input}
            type="text"
            placeholder="Search by keyword"
            data-testid="search-input"
          />
          <button className={styles.map_button}>Map View</button>
          <button className={styles.list_button}>List View</button>
        </div>
        <div className={styles.line}></div>
      </div>

      {/* Map toggle button */}
      <input type="checkbox" className="map_view_toggle" />
      <label htmlFor="map_view_toggle">Map view toggle</label>
      <>
        {/* Filter dropdown that should expand / close when clicked */}
        <FilterDropdown />
        {/* Filter panel should show when "filters" button is clicked */}
        {toggle ? <FilterPanel hideFilterPanel={hideFilterPanel} /> : null}
      </>
      <button data-testid="reset-button">Reset</button>
      <button data-testid="filters-button" onClick={showFilterPanel}>
        Filters
      </button>
    </div>
  );
}