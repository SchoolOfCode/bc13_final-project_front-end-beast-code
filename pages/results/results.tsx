import BarCards from "../../components/BarCards"
import ResultsHeader from "../../components/ResultsHeader"
import ResultsSearchSection from "../../components/ResultsSearchSection"

export default function Results() {
    return <>
    <ResultsHeader/>
    <ResultsSearchSection/>
    <BarCards/>
    <button>Load More...</button>
    </>
}
