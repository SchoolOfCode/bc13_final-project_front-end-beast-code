import ResultsHeader from "../../components/ResultsHeader";
import ResultsSearchSection from "../../components/ResultsSearchSection";
import styles from "../../styles/resultspage.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { tempArray } from "../../data/temparray";
import { filterOptions } from "../../data/filters";
import { filtersObjectType, resultsArrType } from "../../data/types";

//DO NOT DELETE
declare global {
  type TRouter = ReturnType<typeof useRouter> & {
    query: {
      location: string[];
      searchInputPlaceholder: string;
    };
  };
}

export default function Results() {
  const [filters, setFilters] = useState(filterOptions);
  const [results, setResults] = useState<resultsArrType>(tempArray);
  const router = useRouter() as TRouter;
  const heroPageQuery = router.query;
  console.log("heroPageUserInput", heroPageQuery);

  //FETCH REQUEST WOULD HAPPEN HERE
  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch('api')
  //     const data = await response.json()
  //     setResults(data)
  //   } getData()
  // }, [])

  useEffect(() => {
    console.log("This is the data in results", heroPageQuery);
  }, [heroPageQuery]);

  function setDropdown(event: any) {
    const newFilters = filterOptions.map((element: filtersObjectType) => {
      if (event.target.id === element.category.text) {
        element.isOpen = !element.isOpen;
      }
      return element;
    });
    setFilters(newFilters);
  }

  function setCheckbox(event: any) {
    const newFilters = filterOptions.map((filter: filtersObjectType) => {
      filter.options.map((option: { text: string; checked: boolean }) => {
        if (option.text === event.target.id) {
          option.checked = !option.checked;
        }
        return option;
      });
      return filter;
    });
    setFilters(newFilters);
  }

  type checkedOpsArrType = {
    category: string;
    options: string | number | (string | number | null)[];
  }[];

  useEffect(() => {
    function findDif() {
      const checkedOps: checkedOpsArrType = filters
        .map((dd) => {
          return {
            category: dd.category.data,
            options: dd.options
              .map((option) => (option.checked ? option.data : null))
              .filter((item) => item !== null),
          };
        })
        .filter((element) => element.options.length > 0);
      console.log(checkedOps);
    }
    findDif();
  }, [filters]);

  return (
    <>
      <ResultsHeader heroPageQuery={heroPageQuery} />
      <div className={styles.results_main}>
        <ResultsSearchSection
          results={results}
          filters={filters}
          setDropdown={setDropdown}
          setCheckbox={setCheckbox}
          heroPageQuery={heroPageQuery}
        />
      </div>
    </>
  );
}
