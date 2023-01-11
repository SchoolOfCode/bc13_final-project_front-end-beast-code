export default function SearchSection() {
    return <>
        <button data-testid="filters-button">Filters</button>
        <div>
            <div data-testid="search-icon">Search icon</div>
            <input data-testid="input" placeholder="Keyword search"></input>
        </div>
    </>
}