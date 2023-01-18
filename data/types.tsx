export type filtersArrType = {
    category: string;
    options: {text: string, checked: boolean}[];
    isOpen: boolean;
}[]

export type resultsArrType = {
    City: string;
    Name: string;
    Cost: number;
    Description: string;
    Image: string;
    Rating: number;
    Address: string;
    Features: string[];
    Postcode: string;
    Hygiene: number;
    Happy_hr: string;
    Website: string;
    Music: string[];
    Venue_type: string[];
    Other: string[];
    Vibe: string[] | string;
    Who_with: string[];
    location: {
      type: string, 
      coordinates: number[]
    }
}[]

export type optionsPropsType = {
    optionText: string;
    checked: boolean;
};

export type dataPCType = {
    status: number;
    result: {
      longitude: number;
      latitude: number;
    }
}

export type singleBarType = {
    name: string, 
    address: string,
    postcode: string, 
    cost: number,
    rating: number, 
    coordinates: [number,number],
    website: string
}