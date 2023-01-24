import ResultsHeader from "../../components/ResultsHeader"
import ResultsSearchSection from "../../components/ResultsSearchSection"
import styles from "../../styles/resultspage.module.css"
import { useState, useEffect, SetStateAction, CSSProperties } from "react"
import { useRouter } from 'next/router'
import { filterOptions } from "../../data/filters"
import { filtersObjectType, resultsArrType, checkedOpsArrType } from "../../data/types"
import { ParsedUrlQuery } from "querystring"
import ClipLoader from "react-spinners/ClipLoader";
import { type } from "os"
import { matchesMiddleware } from "next/dist/shared/lib/router/router"

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
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#FFF");
  const [filters, setFilters] = useState(filterOptions)
  const [allResults, setAllResults] = useState<resultsArrType>([])
  const [results, setResults] = useState<resultsArrType>([])
  const [queryInput, setQueryInput] = useState("")
  const [queryInputMatches, setQueryInputMatches] = useState<any>([])
  const router = useRouter() as TRouter;
  const heroPageQuery = router.query;
  const [queryFilters, setQueryFilters] = useState<checkedOpsArrType>([])
  const [location, setLocation] = useState<ParsedUrlQuery & {
    location: string[] | string;
    searchInputPlaceholder: string;
  }>(heroPageQuery)
  const [buttonAnimation, setButtonAnimation] = useState(false);

  //gets location from local storage if query from landing page is undefined (ie on page refresh) 
  useEffect (() => {
    const storedLocation = localStorage.getItem('storedLocation')
    const storedPlaceholder = localStorage.getItem('storedPageHeader')
    if ((location.location === undefined) && (storedLocation!== null)&& (storedPlaceholder!== null)) {
      const locationFromLocalStor = {   
        location: storedLocation?.split(','),
        searchInputPlaceholder: storedPlaceholder
      }
      setLocation(locationFromLocalStor)
    }
  }, [location])


  // FETCH REQUEST 
  async function getData() {
    setLoading(true)
    if ((location.location !== undefined) && (typeof(location.location)=== 'object')) {
      const deployed = "https://cheers-bar-finder.onrender.com/"
      const url = `https://cheers-bar-finder.onrender.com/api/router/${location.location[0]},${location.location[1]}`;
      const response = await fetch(url)
      const data = await response.json()
      const newResults: resultsArrType = data.payload.map((element: { location: { coordinates: [number, number] } }) => {
        element.location.coordinates = [element.location.coordinates[1], element.location.coordinates[0]]
        return element;
      })
      setLoading(false)
      setResults(newResults)
      setAllResults(newResults)
    }
  }
  function resetResults(){
    const newFilters = filters.map(el => {
      el.isOpen = false; 
      el.options.map(el2 => { 
        el2.checked = false
        return el2
      })
      return el
    })
    setFilters(newFilters)
    setResults(allResults)
    setQueryInput("")
  }

  useEffect(() => {
    if (typeof(location.location) === 'string') {
      setLocation({location: location.location.split(','), searchInputPlaceholder: location.searchInputPlaceholder} )
    }
    getData()
  }, [location])

  async function getFilteredData() {
    setButtonAnimation(false)
    const newFilters = filters.map(el => {
      el.isOpen = false; return el;})
    console.log(newFilters)
    setFilters(newFilters)
    if (location.location !== undefined) {
      const response = await fetch(`https://cheers-bar-finder.onrender.com/api/router/${location.location[0]},${location.location[1]}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            queryFilters
          })
        })
      const data = await response.json()
      const newResults: resultsArrType = data.payload.map((element: { location: { coordinates: [number, number] } }) => {
        element.location.coordinates = [element.location.coordinates[1], element.location.coordinates[0]]
        return element;
      })
      setResults(newResults)
    }
  }

  function setDropdown(event: any) {
    const newFilters = filterOptions.map((element: filtersObjectType) => {
      if (event.target.id === element.category.text) {
        element.isOpen = !element.isOpen;
      }
      else {
        element.isOpen = false;
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
    setButtonAnimation(true)
  }

  useEffect(() => {
    function findDif() {
      const checkedOps: checkedOpsArrType = filters
        .map(dd => {
          return {
            category: dd.category.data,
            options: dd.options
              .map(option => option.checked ? option.data : null)
              .filter(item => item !== null),
          };
        })
        .filter(element => element.options.length > 0);
      setQueryFilters(checkedOps)
    }
    findDif();
  }, [filters]);

  //Unchecks options if users click the "X" next to the option displayed above the dropdowns
    //Small issue: if two numbers are the same both options will be removed, adding a fix for this as a stretch goal ticket
  function removeOption(event: any): void {
    setButtonAnimation(true)
    let newFilters = [...filters]
    //Looks for any filter options that match the id of the option that was clicked
    for (let i = 0; i < filters.length; i++) {
      for (let j = 0; j < filters[i].options.length; j++) {
        if (filters[i].options[j].data === event.target.id) {
          newFilters[i].options[j].checked = false;
        }
        //Checks for numbers (the id had to be a string)
        if (filters[i].options[j].data === Number(event.target.id)) {
          newFilters[i].options[j].checked = false;
        }
      }
    }
    setFilters(newFilters)
  }

  function getQueryInput(event: any) {
      setQueryInput(event.target.value.toLowerCase())
  }

  //Look through the results array for any instances of the user's search term
  function findQueryInput() {
    setResults(allResults)
    const matches : any = []
    if (queryInput.length > 0){
      //Loops over each results object
    for (let i = 0; i < results.length; i++) {
      //Builds an array of only the values of each object (only the strings), all items to lowercase and stripped of punctuation
      const stringValues: any = Object.values(results[i]).filter(el => typeof (el) === "string").map(item => typeof (item) === "string" ? removePunctuation(item.toLowerCase()) : null)
       //See above but only arrays
      const arrayValues: any = Object.values(results[i]).filter(el => Array.isArray(el)).map(item => Array.isArray(item) ? item.map(arrayItem => removePunctuation(arrayItem.toLowerCase())) : null)
      //Both arrays are put together again (had to be separated because of TypeScript errors)
      const values = [...stringValues, ...arrayValues]
      //Loop over the new values array
      for (let j = 0; j < values.length; j++) {
        //Check for matches in strings
        if (typeof (values[j]) === "string") {
          if (values[j].includes(queryInput)){
            if (matches.includes(values[0]) === false){
              //Push the id of the result into an array
              matches.push(values[0])
            }
          }
        }
        //Check for matches in arrays
        else {
          if (values[j].includes(queryInput)){
            if (matches.includes(values[0]) === false){
              matches.push(values[0])
            }
          }
          if (values[j].some((el: string | string[]) => el.includes(queryInput))){
            if (matches.includes(values[0]) === false){
              matches.push(values[0])
            }
          }
        }
      }
    }
    }
    if (matches.length > 0){
      setQueryInputMatches(matches)
    }
    else {
      setQueryInputMatches([])
      setResults(allResults)
    }
  }

  useEffect(() => {
    //Calls the "findQueryInput" function every time the queryInput changes (i.e. the user types something in the input box)
    findQueryInput()
  }, [queryInput])

  useEffect(() => {
    //Compare the ids stored in "queryInputMatches" against the ids in the results array and find matches
    if (queryInputMatches.length > 0){
      const newResults = allResults.filter(element => queryInputMatches.includes(element._id))
      //Update the results accordingly
      setResults(newResults)
    }
    else {
      //Otherwise set the results back to "allResults"
      setResults(allResults)
    }
  }, [queryInputMatches])

  function removePunctuation(string: string) {
    return string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");
  }

  return (
    <>
      <ResultsHeader setLocation={setLocation} location={location} />
      <div className={styles.results_main}>
        <ResultsSearchSection
          results={results}
          filters={filters}
          setDropdown={setDropdown}
          setCheckbox={setCheckbox}
          heroPageQuery={location}
          resetResults={resetResults}
          getFilteredData={getFilteredData}
          queryFilters={queryFilters}
          getQueryInput={getQueryInput}
          queryInput={queryInput}
          removeOption={removeOption}
          buttonAnimation={buttonAnimation}
        />
      <div className={styles.spinner}>
       <div>
        <ClipLoader
          color="#AF8541"
          loading={loading}   
          size={150}
          aria-label="Loading-Spinner"
          data-testid="loader"
        />
        </div>
      </div>
      </div>
    </>
  );
}
