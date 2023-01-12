import BarCards from "../../components/BarCards"
import ResultsHeader from "../../components/ResultsHeader"
import ResultsSearchSection from "../../components/ResultsSearchSection"
import styles from "../../styles/resultsPage.module.css"


export default function Results() {
    return <div className={styles.resultsPage}>
    <ResultsHeader/>
    <ResultsSearchSection/>
    <BarCards/>
    <button>Load More...</button>
    </div>
}
