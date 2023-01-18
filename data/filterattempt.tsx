export {}

// import { useState, useEffect } from "react"
// import { tempArray } from "../../data/temparray"
// import { filterOptions } from "../../data/filters"
// import { resultsArrType } from "../../data/types"

// const [filters, setFilters] = useState(filterOptions)
// const [results, setResults] = useState<resultsArrType>(tempArray)

// // "City" | "Name" | "Cost" | "Description" | "Image" | "Rating" | "Address" | "Features" | "Postcode" | "Hygiene" | "Happy_hr" | "Website" | "Music" |
//   //   "Venue_type" | "Other" | "Vibe" | "Who_with" | "location" | 

//   type checkedOpsArrType = {
//     category: string;
//     options: {text: string, checked: boolean}[]
//   }[]

//   useEffect(() => {
//     function findDif() {
//       const checkedOps : checkedOpsArrType = filters.map(dd => {
//         return {category: dd.category,  
//                 options: dd.options.filter((option: { checked: boolean }) => option.checked)}
//         }).filter(element => element.options.length > 0)
//       filterResults(checkedOps)
//     }

//     function filterResults(checkedOps : checkedOpsArrType) {
//         setResults(tempArray)
//         const filteredResults = []
//         //Loop through the results
//         for (let i = 0; i < filters.length; i++) {
//           for (let j = 0; j < filters[i].options.length; j++){
//             if (filters[i].options[j].checked){
//               console.log(filters[i].options[j])
//               for (let k = 0; k < results.length; k++){
//                 for (const property in results[k]) {
//                   // if (typeof(results[k][property]) === "object"){
//                   //   if(results[k][property].length !== undefined){
//                   //     if (results[k][property].includes(filters[i].options[j].text)){
//                   //       //CHECK FOR DUPLICATES
//                   //       filteredResults.push(results[k])
//                   //     }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//         if (filteredResults.length > 0){
//           setResults(filteredResults)
//         }
//       }
//     findDif()
//     }, [filters])

//     useEffect(() => {
//       console.log("HEYYYYYY i'm the new results :)", results)
//     }, [results])
