import BarCards from "../../components/BarCards"
import ResultsHeader from "../../components/ResultsHeader"
import ResultsSearchSection from "../../components/ResultsSearchSection"
import styles from "../../styles/resultspage.module.css"

export default function Results() {
    return (
      <>
        <ResultsHeader />
        <div className={styles.results_main}>
          <ResultsSearchSection />
        </div>
      </>
    );
}