import React from 'react'
import FilterDropdown from './FilterDropdown'
import FilterPanel from './FilterPanel'

export default function ResultsSearchSection() {

  return (
    <div>
        {/* Search bar for filtering results by keyword */}
        <div data-testid="search-icon">Search icon</div>
        <input type="text" placeholder='Search within results' data-testid="search-input"/>
        {/* Map toggle button */}
        <input type="checkbox" className="map_view_toggle"/>
        <label htmlFor='map_view_toggle'>Map view toggle</label>
        <>
        <FilterDropdown/>
        {/* Filter panel slides in when "filters" button is clicked */}
        <FilterPanel/>
        </>
        <button data-testid="reset-button">Reset</button>
    </div>
  )
}