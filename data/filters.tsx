import { filtersArrType } from "./types"

export const filterOptions: filtersArrType = [
  {
    category: { text: "Price", data: "Cost" },
    options: [{ text: "£", data: 1, checked: false }, { text: "££", data: 2, checked: false }, { text: "£££", data: 3, checked: false }],
    isOpen: false
  },
  {
    category: { text: "Rating", data: "Rating" },
    options: [{ text: "1", data: 1, checked: false }, { text: "2", data: 2, checked: false }, { text: "3", data: 3, checked: false }, { text: "4", data: 4, checked: false }, { text: "5", data: 5, checked: false }],
    isOpen: false
  },
  {
    category: {text: "Venue", data: "Venue_type"},
    options: [{ text: "Cocktail Bar", data: "Cocktail bar", checked: false }, { text: "Café bar", data: "Cafe Bar", checked: false }, { text: "Restaurant", data: "Restaurant", checked: false }, { text: "Wine bar", data: "Wine Bar", checked: false }, { text: "Pub", data: "Pub", checked: false }, { text: "Club", data: "Club", checked: false }, { text: "Queer venue", data: "Queer Venue", checked: false }, { text: "Student venue", data: "Student Venue", checked: false }],
    isOpen: false
  },
  {
    category: {text: "Vibe", data: "Vibe"},
    options: [{ text: "Romantic", data: "Romantic", checked: false }, { text: "Formal", data: "Formal",  checked: false }, { text: "Retro", data: "Retro", checked: false }, { text: "Quirky", data: "Quirky", checked: false }, { text: "Lively", data: "Lively", checked: false }, { text: "Cosy", data: "Cosy", checked: false }, { text: "Traditional", data: "Traditional", checked: false }, { text: "Instagram", data: "Instagram", checked: false }],
    isOpen: false
  },
  {
    category: {text: "Music", data: "Music"},
    options: [{ text: "Jazz", data: "Jazz", checked: false }, { text: "Rock", data: "Rock", checked: false }, { text: "Cheesy pop", data: "Cheesy Pop", checked: false }, { text: "Electronic", data: "Electronic", checked: false }, { text: "Hip hop", data: "Hip-hop", checked: false }, { text: "Latin", data: "Latin", checked: false }, { text: "RnB", data: "RnB", checked: false }, { text: "Classical", data: "Classical", checked: false }, { text: "Ambient", data: "Ambient", checked: false }, { text: "Soul", data: "Soul", checked: false }, { text: "House", data: "House", checked: false }],
    isOpen: false
  },
  {
    category: {text: "Other concerns", data: "Other"},
    options: [{ text: "Wheelchair accessible", data: "Wheelchair accessible", checked: false }, { text: "Dog friendly", data: "Dog friendly", checked: false }, { text: "Vegan friendly", data: "Vegan friendly", checked: false }, { text: "Reservation necessary", data: "Reservations Necessary", checked: false }],
    isOpen: false
  },
  {
    category: {text: "Features and activities", data: "Features"},
    options: [{ text: "Bar games", data: "Bar Games", checked: false }, { text: "Live sports", data: "Live Sports", checked: false }, { text: "Dance floor", data: "Dance Floor", checked: false }, { text: "Bookable space", data: "Bookable Space(s)", checked: false }, { text: "Bar snacks", data: "Bar Snacks", checked: false }, { text: "Food", data: "Food", checked: false }, { text: "Live events", data: "Live Events", checked: false }, { text: "Outdoor space", data: "Outdoor Space", checked: false }],
    isOpen: false
  },
  {
    category: {text: "Who with", data: "Who_with"},
    options: [{ text: "Date", data: "Date", checked: false }, { text: "Large group", data: "Large group", checked: false }, { text: "Family", data: "Family", checked: false }, { text: "Client", data: "Client", checked: false }, { text: "Colleagues", data: "Colleagues", checked: false }, { text: "Friends", data: "Friends", checked: false }, { text: "Stag/hen party", data: "Stag/Hen Party", checked: false }],
    isOpen: false
  }
]