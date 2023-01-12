import FilterPanel from "./FilterPanel"
import FilterDropdown from "./FilterDropdown"

export default function SearchSection() {
    return <>
        {/* Filter panel should show when this button is clicked */}
        <button data-testid="filters-button">Filters</button>
            <FilterPanel/>
        <div>
            <div data-testid="search-icon">Search icon</div>
            <input data-testid="input" placeholder="Keyword search"></input>
        </div>
        {/* Filter dropdown should expand / close when clicked */}
        <FilterDropdown/>
    </>
}