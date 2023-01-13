import React from 'react'
import FilterDropdown from './FilterDropdown'
import FilterPanel from "./FilterPanel"
import styles from "../styles/Results-search-section.module.css";
import Image from "next/image";
import { useState } from "react";

export default function ResultsSearchSection() {
  const [style, setStyle] = useState("btn");
  function leftClick() {
    setStyle("btn10");
  }

  function rightClick() {
    setStyle("btn");
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
          <div className={styles.button_box}>
            <div className={styles[style]}></div>
            <button
              type="button"
              className={styles.toggle_btn}
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                rightClick();
              }}
            >
              List View
            </button>
            <button
              type="button"
              className={styles.toggle_btn}
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                leftClick();
              }}
            >
              Map View
            </button>
          </div>
        </div>
        <div className={styles.gold_underline}></div>
      </div>
      {/* Map toggle button */}
      <input type="checkbox" className="map_view_toggle" />
      <label htmlFor="map_view_toggle">Map view toggle</label>
      <>
        {/* Filter dropdown that should expand / close when clicked */}
        <FilterDropdown />
        {/* Filter panel should show when "filters" button is clicked */}
        <FilterPanel />
      </>
      <button data-testid="reset-button">Reset</button>
    </div>
  );
}
