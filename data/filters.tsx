import { filtersArrType } from "./types"

export const filterOptions : filtersArrType = [
    {
      category: "Price", 
      options: [{text: "£", checked: false}, {text: "££", checked: false}, {text: "£££", checked: false}],
      isOpen: false
    },
    {
      category: "Rating", 
      options: [{text: "1", checked: false}, {text: "2", checked: false}, {text: "3", checked: false}, {text: "4", checked: false}, {text: "5", checked: false}],
      isOpen: false
    },
    {
      category: "Venue",
      options: [{text: "Cocktail bar", checked: false}, {text: "Café bar", checked: false}, {text: "Restaurant", checked: false}, {text: "Wine bar", checked: false}, {text: "Pub", checked: false}, {text: "Club", checked: false},{text: "Queer venue", checked: false}, {text: "Student venue", checked: false}],
      isOpen: false
    },
    {
      category: "Vibe",
      options: [{text: "Romantic", checked: false}, {text: "Formal", checked: false}, {text: "Retro", checked: false}, {text: "Quirky", checked: false}, {text: "Lively", checked: false}, {text: "Cosy", checked: false}, {text: "Traditional", checked: false}, {text: "Instagrammable", checked: false}],
      isOpen: false
    },
    { 
      category: "Music",
      options: [{text: "Jazz", checked: false}, {text: "Rock", checked: false}, {text: "Cheesy pop", checked: false}, {text: "Electronic", checked: false}, {text: "Hip hop", checked: false}, {text: "Latin", checked: false}, {text: "RnB", checked: false}, {text: "Classical", checked: false}, {text: "Ambient", checked: false}, {text: "Soul", checked: false}, {text: "House", checked: false}],
      isOpen: false
    },
    {
      category: "Other concerns", 
      options: [{text: "Accessibility", checked: false}, {text: "Dog friendly", checked: false}, {text: "Vegetarian/vegan options", checked: false}, {text: "Reservation necessary", checked: false}],
      isOpen: false
    },
    {
      category: "Features and activities",
      options:  [{text: "Bar games", checked: false}, {text: "Live sports", checked: false}, {text: "Dance floor", checked: false}, {text: "Bookable space", checked: false}, {text: "Bar snacks", checked: false}, {text: "Food", checked: false}, {text: "Live events", checked: false}, {text: "Outdoor space", checked: false}],
      isOpen: false
    },
    {
      category: "Who with",
      options: [{text: "Date", checked: false}, {text: "Large group", checked: false}, {text: "Family", checked: false}, {text: "Client", checked: false}, {text: "Colleagues", checked: false}, {text: "Friends", checked: false}, {text: "Stag/hen party", checked: false}],
      isOpen: false
    }
]