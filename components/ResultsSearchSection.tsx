import React, { MouseEventHandler } from "react";
import FilterDropdown from "./FilterDropdown";
import FilterPanel from "./FilterPanel";
import styles from "../styles/Results-search-section.module.css";
import BarCards from "./BarCards";
import dynamic from "next/dynamic";
import { useState } from "react";
import { filtersArrType, resultsArrType } from "../data/types";

type propsObj = {
  results: resultsArrType;
  filters: filtersArrType;
  setDropdown: MouseEventHandler<HTMLParagraphElement>;
  setCheckbox: MouseEventHandler<HTMLParagraphElement>;
};

export default function ResultsSearchSection({
  results,
  filters,
  setDropdown,
  setCheckbox,
}: propsObj) {
  const [view, setView] = useState("list");
  const [numberOfResults, setNumberOfResults] = useState(9);

  function updateNumberOfResults() {
    setNumberOfResults(numberOfResults + 9);
  }

  const [style, setStyle] = useState("btn");
  function leftClick() {
    setStyle("btn10");
    setView("map");
  }

  function rightClick() {
    setStyle("btn");
    setView("list");
  }

  const Map = dynamic(() => import("../components/Map"), { ssr: false });

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
        <div className={styles.all_filter_buttons}>
          <div className={styles.dropdown_container}>
            {/* Filter dropdown expands / closes when clicked */}
            <FilterDropdown
              filters={filters.filter((element, index) => index < 4)}
              setDropdown={setDropdown}
              setCheckbox={setCheckbox}
            />
            <button data-testid="reset-button" className={styles.reset_button}>
              Reset
            </button>
          </div>
          {/* Filter panel shows when "filters" button is clicked */}
          <FilterPanel
            filters={filters}
            setDropdown={setDropdown}
            setCheckbox={setCheckbox}
          />
        </div>
        {view === "list" ? (
          <BarCards
            results={results}
            numberOfResults={numberOfResults}
          />
        ) : (
          <Map />
        )}
        {view === "list" ? (
          <div className={styles.button_centering}>
            <button
              className={styles.load_more_button}
              onClick={updateNumberOfResults}
            >
              <span onClick={updateNumberOfResults}>Load More</span>
            </button>
          </div>
        ) : null}

        {/* <div className={styles.button_centering}>
          <button className={styles.load_more_button}>
            <span>Load More</span>
          </button>
        </div> */}
      </>
    </div>
  );
}
