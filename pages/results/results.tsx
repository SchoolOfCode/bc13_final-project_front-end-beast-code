import ResultsHeader from "../../components/ResultsHeader"
import ResultsSearchSection from "../../components/ResultsSearchSection"
import styles from "../../styles/resultspage.module.css"
import { useEffect } from "react"
import { useRouter } from 'next/router'

export default function Results() {
  const router = useRouter();
  const data = router.query;

    useEffect(() => {
      console.log("This is the data in results", data)
    }, [data])

    return (
      <>
        <ResultsHeader />
        <div className={styles.results_main}>
          <ResultsSearchSection />
        </div>
      </>
    );
}