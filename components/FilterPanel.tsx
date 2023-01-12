import FilterDropdown from "./FilterDropdown"

export default function FilterPanel(){
    return <div>
        <button data-testid="reset-button">Reset</button>
        <button data-testid="done-button">Done</button>
        <FilterDropdown/>
    </div>
}