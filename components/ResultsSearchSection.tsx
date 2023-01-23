import React, { ChangeEventHandler, MouseEventHandler } from "react";
import FilterDropdown from "./FilterDropdown";
import FilterPanel from "./FilterPanel";
import styles from "../styles/Results-search-section.module.css";
import BarCards from "./BarCards";
import dynamic from "next/dynamic";
import { useState } from "react";
import { filtersArrType, resultsArrType, checkedOpsArrType } from "../data/types";

type propsObj = {
  results: resultsArrType;
  filters: filtersArrType;
  setDropdown: MouseEventHandler<HTMLParagraphElement>;
  setCheckbox: MouseEventHandler<HTMLParagraphElement>;
  getFilteredData: MouseEventHandler<HTMLButtonElement>;
  heroPageQuery: {
    location: string[];
    searchInputPlaceholder: string;
  };
  queryFilters: checkedOpsArrType;
  resetResults: MouseEventHandler<HTMLButtonElement>;
  getQueryInput: ChangeEventHandler<HTMLInputElement>;
  queryInput: string;
  removeOption: MouseEventHandler<HTMLButtonElement>;
  buttonAnimation: boolean;
}

export default function ResultsSearchSection({ results, filters, setDropdown, setCheckbox, getFilteredData, heroPageQuery, queryFilters, resetResults, getQueryInput, queryInput, removeOption, buttonAnimation }: propsObj) {
  const [view, setView] = useState("list")
  const [numberOfResults, setNumberOfResults] = useState(9)
  const [panelState, setPanelState] = useState(false);

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
            value={queryInput}
            type="text"
            placeholder="Search by keyword"
            data-testid="search-input"
            onChange={getQueryInput}
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
      <div className={styles.filter_section_container}>
        {/* First attempt at displaying filter options */}
      {queryFilters ? <div className={styles.query_filters_container}>
        {queryFilters.map(filter => 
        <div className={styles.query_filter_option} key={filter.category}>  
          {filter.category.split("_")[0]} : 
          {filter.options.map(option => 
              <p key={option}>
                {option}
              <button 
                className={styles.query_filter_delete} 
                id={`${option}`} 
                onClick={removeOption}>X
              </button>
            </p>)}
        </div>)}
        </div> : null}
        <div className={styles.all_filter_buttons}>        
          <div className={styles.dropdown_container}>
            {panelState ? null : (
              <>
                <div className={styles.dropdown_inner_container}>
                  <FilterDropdown
                    filters={filters.filter((element, index) => index < 4)}
                    setDropdown={setDropdown}
                    setCheckbox={setCheckbox}
                  />
                  {buttonAnimation ? <button
                    className={styles.filters_button_hithere}
                    onClick={getFilteredData}
                  >
                    Apply filters
                  </button> : <button
                    className={styles.filters_button}
                    onClick={getFilteredData}
                  >
                    Apply filters
                  </button> 
                  }

                </div>
                <div className={styles.button_container}>
                  <button
                    data-testid="reset-button"
                    className={styles.reset_button}
                    onClick={resetResults}
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setPanelState(true)}
                    className={styles.more_filters_button}
                    data-testid="more-filters"
                  >
                    More Filters
                  </button>
                </div>
              </>
            )}
          </div>
          {/* Filter panel shows when "filters" button is clicked */}
          <FilterPanel
            filters={filters}
            setDropdown={setDropdown}
            setCheckbox={setCheckbox}
            panelState={panelState}
            setPanelState={setPanelState}
            resetResults={resetResults}
            getFilteredData={getFilteredData}
          />
        </div>
      </div>
        {view === "list" ? (
          <BarCards results={results} numberOfResults={numberOfResults} />
        ) : (
          <Map results={results} heroPageQuery={heroPageQuery} />
        )}
        {view === "list" ? (
          <div className={styles.button_centering}>
            {numberOfResults > results.length ? null : <button
              className={styles.load_more_button}
              onClick={updateNumberOfResults}
            >
              <span onClick={updateNumberOfResults}>Load More</span>
            </button>}
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
