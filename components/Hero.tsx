import styles from "../styles/hero.module.css";
import Link from 'next/link'

export default function Hero() {
  return (
    <div data-testid="main-container" className={styles.main_container}>
      <h1 data-testid="title">Raise the bar, sink into the atmosphere</h1>
      <div data-testid="search-container" className={styles.search_container}>
        <input placeholder="Location or Postcode" data-testid="input"></input>
        <Link href="/results/results">
          <button data-testid="button" className={styles.search_button}>
            <span>Search</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
