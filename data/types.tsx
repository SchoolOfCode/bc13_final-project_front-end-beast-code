import { LatLngExpression } from 'leaflet';
import { ParsedUrlQuery } from "querystring"

export type filtersObjectType = {
    category: {
        text: string;
        data: string;
    };
    options: {
        text: string;
        data: string | number;
        checked: boolean;
    }[];
    isOpen: boolean;
}

export type filtersArrType = filtersObjectType[]

export type resultsArrType = {
  _id: "string";
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
    type: string;
    coordinates: [number, number];
  };
  dist: Dist;
}[];

export type optionsPropsType = {
    optionText: string;
    checked: boolean;
};

export type dataPCType = {
  status: number;
  result: {
    longitude: number;
    latitude: number;
    admin_district: string;
  };
};

export type singleBarType = {
    name: string, 
    address: string,
    postcode: string, 
    cost: number,
    rating: number, 
    coordinates: [number,number],
    website: string
}


export interface Location {
    type: string;
    coordinates: number[];
}

export interface Dist {
    calculated: number;
}

export type checkedOpsArrType = {
    category: string;
    options: (string | number | null)[]
  }[]

export type heroQueryObject = {
  location: string[];
  searchInputPlaceholder: string;
};

export type dataObjectType = {
    heroPageQuery: {
      location: string[];
      searchInputPlaceholder: string;
    };
  };

export type resultsHeaderPropsType = {
    setLocation: any ,
    location: ParsedUrlQuery & {
      location: string[] | string;
      searchInputPlaceholder: string;},
  }

  export interface Root {
    barInfo: Bar;
  }
  
  export interface Bar {
    _id: string;
    City: string;
    Name: string;
    Cost: number;
    Description: string;
    Image: string;
    Rating: number;
    Address: string;
    Postcode: string;
    Hygiene: number;
    Happy_hr: string;
    Website: string;
    Music: string[];
    Venue_type: string[];
    Other: string[];
    Vibe: string[];
    Features: string[];
    Who_with: string[];
    location: Location;
  }
  
  export interface Location {
    type: string;
    coordinates: number[];
  }