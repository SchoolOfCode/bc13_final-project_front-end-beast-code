import ResultsHeader from "../../components/ResultsHeader"
import ResultsSearchSection from "../../components/ResultsSearchSection"
import styles from "../../styles/results_page.module.css"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import { filterOptions } from "../../data/filters"
import { filtersObjectType, resultsArrType, checkedOpsArrType } from "../../data/types"
import { ParsedUrlQuery } from "querystring"
import ClipLoader from "react-spinners/ClipLoader";

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
  const router = useRouter() as TRouter;
  const heroPageQuery = router.query;

  //State that handles rendering the loading spinner while fetch requested is being awaited
  let [loading, setLoading] = useState(true);
  //??
  let [color, setColor] = useState("#FFF");
  //Sets the state of the dropdown filters, handling their text, open/closed state and the checked state of each option
  const [filters, setFilters] = useState(filterOptions)
  //Maintains the results of the initial fetch request (location only) to easily reset results after filters have been applied
  const [allResults, setAllResults] = useState<resultsArrType>([])
  //Handles the state of the results that are displayed on the screen
  const [results, setResults] = useState<resultsArrType>([])
  //Maintains the results of the most recent search by filter
  const [filteredResults, setFilteredResults] = useState<resultsArrType>([])
  //The search term entered by the user in the keyword search bar
  const [queryInput, setQueryInput] = useState("")
  //The ids of all items that matched search term entered by the user in the keyword search bar
  const [queryInputMatches, setQueryInputMatches] = useState<any>([])
  //The users' filter selections
  const [queryFilters, setQueryFilters] = useState<checkedOpsArrType>([])
  //The location entered by the user in the landing page search bar
  const [location, setLocation] = useState<ParsedUrlQuery & {
    location: string[] | string;
    searchInputPlaceholder: string;
  }>(heroPageQuery)
  //Sets whether the "Apply filters" button should be animated or not
  const [buttonAnimation, setButtonAnimation] = useState(false);
  //Sets whether the "No results" message should be displayed
  const [noResults, setNoResults] = useState(false)

  //Gets location from local storage if query from landing page is undefined (i.e. on page refresh) 
  useEffect(() => {
    const storedLocation = localStorage.getItem('storedLocation')
    const storedPlaceholder = localStorage.getItem('storedPageHeader')
    if ((location.location === undefined) && (storedLocation !== null) && (storedPlaceholder !== null)) {
      const locationFromLocalStor = {
        location: storedLocation?.split(','),
        searchInputPlaceholder: storedPlaceholder
      }
      setLocation(locationFromLocalStor)
    }
  }, [location])


  /** Initial fetch request to get all results within 20000m of the user's location */
  async function getData() {
    setLoading(true)
    if ((location.location !== undefined) && (typeof(location.location)=== 'object')) {
      const deployed = "https://cheers-bar-finder.onrender.com/"
      const url = `https://cheers-bar-finder.onrender.com/api/router/${location.location[0]},${location.location[1]}`;
      const response = await fetch(url)
      const data = await response.json()
      //Reorders the coordinates to the correct format for map view
      const newResults: resultsArrType = data.payload.map((element: { location: { coordinates: [number, number] } }) => {
        element.location.coordinates = [element.location.coordinates[1], element.location.coordinates[0]]
        return element;
      })
      setLoading(false)
      setResults(newResults)
      setAllResults(newResults)
    }
  }
  /** Resets the results page so that all results from the initial fetch request are displayed, all dropdowns are closed, all checkboxes are unchecked and the keyword search input is cleared */
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


  //Makes the fetch request whenever the user's location is changed
  useEffect(() => {
    if (typeof(location.location) === 'string') {
      setLocation({location: location.location.split(','), searchInputPlaceholder: location.searchInputPlaceholder} )
    }
    getData()
  }, [location])

  /** Subsequent fetch request with the user's filter selections inserted into the body to be added as a query to our database */
  async function getFilteredData() {
    console.log(queryFilters)
    setButtonAnimation(false)
    //Closes all dropdowns when the user has finished their selection
    const newFilters = filters.map(el => {
      el.isOpen = false; return el;
    })
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
      //Rearranges the order of the coordinates in the correct format for the map view
      const newResults: resultsArrType = data.payload.map((element: { location: { coordinates: [number, number] } }) => {
        element.location.coordinates = [element.location.coordinates[1], element.location.coordinates[0]]
        return element;
      })
      setResults(newResults)
      setFilteredResults(newResults)
      if (queryInput.length > 0){
        findQueryInput()
      }
    }
  }

  //Sets the state for whether or not a "no results" message should be rendered on the screen every time the results array is updated
  useEffect(() => {
    if (loading === false) {
      if (results.length < 1) {
        setNoResults(true)
      }
      else {
        setNoResults(false)
      }
    }
  }, [results])

  /** Set the status of each dropdown to open or closed if the user clicks. Only one dropdown is able to be open at a time. */
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

  /** Sets the checked status of each option the user clicks to true and also initiates the button animation that prompts the user to click "Apply filters" when they've finished their selection */
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

  //Creates an array of the options selected by the user whenever the filters array is updated (i.e. an option's checked status is changed)
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

  /** Unchecks options if users click the "X" next to the option displayed above the dropdowns */
  //Small issue: if two numbers are the same both options will be removed
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

  /** Sets the queryInput state to whatever is entered by the user in the keyword search bar. Their input is also set to lowercase and stripped of all punctuation */
  function getQueryInput(event: any) {
    setQueryInput(removePunctuation(event.target.value.toLowerCase()))
  }

  /** Iterates over the results array for any instances of the user's search term */
  function findQueryInput() {
    const matches: any = []
    let resultsArray = []
    if (filteredResults.length > 0){
      resultsArray = [...filteredResults]
    }
    else {
      resultsArray = [...results]
    }
    if (queryInput.length > 0) {
      //Loops over each results object
      for (let i = 0; i < resultsArray.length; i++) {
        //Builds an array of only the values of each object (only the strings), all items to lowercase and stripped of punctuation
        const stringValues: any = Object.values(resultsArray[i]).filter(el => typeof (el) === "string").map(item => typeof (item) === "string" ? removePunctuation(item.toLowerCase()) : null)
        //See above but only arrays
        const arrayValues: any = Object.values(resultsArray[i]).filter(el => Array.isArray(el)).map(item => Array.isArray(item) ? item.map(arrayItem => removePunctuation(arrayItem.toLowerCase())) : null)
        //Both arrays are put together again (had to be separated because of TypeScript errors)
        const values = [...stringValues, ...arrayValues]
        //Loop over the new values array
        for (let j = 0; j < values.length; j++) {
          //Check for matches in strings and instances of the exact term in arrays
          if (values[j].includes(queryInput)) {
            if (matches.includes(values[0]) === false) {
              //Push the id of the result into an array
              matches.push(values[0])
            }
          }
          //Check for matches in each string in the arrays
          if (Array.isArray(values[j])) {
            if (values[j].some((el: string | string[]) => el.includes(queryInput))) {
              if (matches.includes(values[0]) === false) {
                matches.push(values[0])
              }
            }
          }
        }
      }
    }
    setQueryInputMatches(matches)
  }

  useEffect(() => {
    if (queryInput.length > 0){
      //Calls the "findQueryInput" function every time the queryInput changes (i.e. the user types something in the input box)
      findQueryInput()
    }
    else {
      if (filteredResults.length > 0){
        setResults(filteredResults)
      }
      else {
        setResults(allResults)
      }
    }
  }, [queryInput])

  useEffect(() => {
      //Compare the ids stored in "queryInputMatches" against the ids in the results array and find matches
      const newResults = results.filter(element => queryInputMatches.includes(element._id))
      //Update the results accordingly
      setResults(newResults)
  }, [queryInputMatches])

  /** Strips a string of all punctuation */
  function removePunctuation(string: string) {
    //The first regular expression is for removing the punctuation, the subsequent one is for removing the spaces left behind afterwards
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
          noResults={noResults}
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