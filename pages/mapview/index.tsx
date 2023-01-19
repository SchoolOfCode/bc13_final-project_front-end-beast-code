import dynamic from "next/dynamic";
import ResultsHeader from "../../components/ResultsHeader";
import { useRouter } from "next/router";


export default function Results() {
    const Map = dynamic(
        () => import('../../components/Map'),
        { ssr: false } // This line is important. It's what prevents server-side render
    )
  
  const router = useRouter() as TRouter;
  const heroPageQuery = router.query;

  return (
    <>
      <ResultsHeader heroPageQuery={heroPageQuery} />
      <Map />
    </>
  );
}
