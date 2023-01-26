import React, { ChangeEventHandler, MouseEventHandler, useEffect } from "react";
import FilterDropdown from "./FilterDropdown";
import FilterPanel from "./FilterPanel";
import styles from "../styles/results_search_section.module.css";
import BarCards from "./BarCards";
import dynamic from "next/dynamic";
import { useState } from "react";
import { filtersArrType, resultsArrType, checkedOpsArrType, sortingObjectType } from "../data/types";
import SortingDropdown from "./SortingDropdown";

type propsObj = {
  results: resultsArrType;
  filters: filtersArrType;
  setDropdown: MouseEventHandler<HTMLParagraphElement>;
  setCheckbox: MouseEventHandler<HTMLParagraphElement>;
  setRadioCheckbox: MouseEventHandler<HTMLParagraphElement>;
  getFilteredData: MouseEventHandler<HTMLButtonElement>;
  heroPageQuery: {
    location: string[] | string;
    searchInputPlaceholder: string;
  };
  queryFilters: checkedOpsArrType;
  resetResults: MouseEventHandler<HTMLButtonElement>;
  getQueryInput: ChangeEventHandler<HTMLInputElement>;
  queryInput: string;
  removeOption: MouseEventHandler<HTMLButtonElement>;
  buttonAnimation: boolean;
  noResults: boolean;
  panelState: boolean;
  setPanelState: Function;
  sortResults: MouseEventHandler<HTMLInputElement>;
  sortingObj: sortingObjectType;
}

export default function ResultsSearchSection({ results, filters, setDropdown, setCheckbox, setRadioCheckbox, getFilteredData, heroPageQuery, queryFilters, resetResults, getQueryInput, queryInput, removeOption, buttonAnimation, noResults, panelState, setPanelState, sortResults, sortingObj }: propsObj) {

  //Toggles the state between map and list view
  const [view, setView] = useState("list")
  //Increments the number of results displayed on the screen by 9
  const [displayResultsNumber, setDisplayResultsNumber] = useState(9)
  //Toggle the style of the button clicked by the user between gold (selected) and green (unselected)
  const [style, setStyle] = useState("btn");

  /** Function to add 9 to the number of results to be displayed on the screen on click */
  function updateNumberOfResults() {
    setDisplayResultsNumber(displayResultsNumber + 9);
  }

  /** Updates the view and the selected button's CSS on click */
  function leftClick() {
    setStyle("btn10");
    setView("map");
  }

  /** Updates the view and the selected button's CSS on click */
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
      {/* If there are any filters selected, they're displayed on the screen */}
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
                onClick={removeOption}>
              </button>
            </p>)}
        </div>)}
        </div> : null}
        <div className={styles.all_filter_buttons}>    
          <div className={styles.dropdown_container}>
            {/* Conditionally renders the basic dropdowns if the panel is closed */}
            {panelState ? null : (
              <>
                <div className={styles.dropdown_inner_container}>
                  <FilterDropdown
                    filters={filters.filter((element, index) => index < 4)}
                    setDropdown={setDropdown}
                    setCheckbox={setCheckbox}
                  />
                  <SortingDropdown setDropdown={setDropdown} setRadioCheckbox={setRadioCheckbox} sortingObj={sortingObj}/>
                </div>
                <div className={styles.button_container}>
                  {/* Conditionally renders the animation styling on the "Apply filters" depending on whether the user needs to click the button or not */}
                  {buttonAnimation ? <button
                    className={styles.filters_button_hithere}
                    onClick={getFilteredData}
                  >
                    Apply Filters
                  </button> : <button
                    className={styles.filters_button}
                    onClick={getFilteredData}
                  >
                    Apply Filters
                  </button> 
                  }
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
            {results.length > 0 ? 
              results.length === 1 ? 
                <div className={styles.results_number}>{results.length} result</div> : <div className={styles.results_number}>{results.length} results</div> 
                : null}
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
          <BarCards results={results} displayResultsNumber={displayResultsNumber} noResults={noResults} />
        ) : (
          <Map results={results} heroPageQuery={heroPageQuery} />
        )}
        {view === "list" ? (
          <div className={styles.button_centering}>
            {displayResultsNumber >= results.length ? null : <button
              className={styles.load_more_button}
              onClick={updateNumberOfResults}
            >
              <span onClick={updateNumberOfResults}>Load More</span>
            </button>}
          </div>
        ) : null}
      </>
    </div>
  );
}
