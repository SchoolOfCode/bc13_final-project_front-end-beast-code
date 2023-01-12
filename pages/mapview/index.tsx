import dynamic from "next/dynamic";
import ResultsHeader from "../../components/ResultsHeader";

export default function Results() {
    const Map = dynamic(
        () => import('../../components/Map'),
        { ssr: false } // This line is important. It's what prevents server-side render
      )

  return (
    <>
      <ResultsHeader/>
      <Map />
    </>
  );
}
