export default function Hero() {
    return <div data-testid="main-container">
        <h1 data-testid="title">Page title</h1>
        <div data-testid="search-container">
            <input placeholder="Enter a Location or Postcode" data-testid="input"></input>
            <button data-testid="button">Search</button>
        </div>
    </div>
}