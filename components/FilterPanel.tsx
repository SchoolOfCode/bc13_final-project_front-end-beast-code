import FilterDropdown from "./FilterDropdown"

export default function FilterPanel({hideFilterPanel} : any) {
    return <div>
        <h1 style={{color: "black"}}>FILTER PANEL</h1>
        <button data-testid="reset-button">Reset</button>
        <button data-testid="done-button" onClick={hideFilterPanel}>Done</button>
        <FilterDropdown/>
    </div>
}