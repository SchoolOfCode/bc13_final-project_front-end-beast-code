import BarPageInfo from "../../components/Barpage"
import ResultHeader from "../../components/ResultsHeader"
import { useRouter } from "next/router";

export default function Bar() {
    const router = useRouter() as TRouter;
  const heroPageQuery = router.query;
  console.log("when bar card is clicked", heroPageQuery.searchInputPlaceholder);
    return (
      <>
        <ResultHeader heroPageQuery={heroPageQuery} />
        <BarPageInfo />
      </>
    );
}
