import React from 'react'
import FilterDropdown from './FilterDropdown'
import FilterPanel from "./FilterPanel"
import styles from "../styles/Results-search-section.module.css";
import {basicFilterOptions, advancedFilterOptions} from "../data/filters.js"
import Image from "next/image";
import BarCards from './BarCards';
import dynamic from 'next/dynamic';
import { useState } from "react";

export default function ResultsSearchSection() {
  const [view, setView] = useState("list")

  const [style, setStyle] = useState("btn");
  function leftClick() {
    setStyle("btn10");
    setView("map")
  }

  function rightClick() {
    setStyle("btn");
    setView("list")
  }

  const Map = dynamic(
    () => import('../components/Map'),
    { ssr: false })

  return (
    <div className={styles.parent_container}>
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
        <>
        <div className={styles.dropdown_container}>
            {/* Filter dropdown expands / closes when clicked */}
            <FilterDropdown initialFilterOptions={basicFilterOptions}/>
            <button data-testid="reset-button" className={styles.reset_button}>Reset</button>
        </div>
        {/* Filter panel shows when "filters" button is clicked */}
        <FilterPanel initialFilterOptions={advancedFilterOptions}/>
        {view === "list" ? <BarCards/> : <Map/>}
        <button>Load More...</button>
        </>
    </div>
  );
}
