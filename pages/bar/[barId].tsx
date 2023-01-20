import BarPageInfo from "../../components/Barpage";
import BarPageHeader from "../../components/BarPageHeader";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Bar({ barInfo }: Root) {
  return (
    <>
      <BarPageHeader />
      <BarPageInfo barInfo={barInfo} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:3002/api/router/");
  const data = await response.json();
  const result = data.payload;
  const paths = result.map((bar: Bar) => {
    return {
      params: {
        barId: `${bar._id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params!; // ! is a non-null assertion
  const response = await fetch(
    `http://localhost:3002/api/router/${params.barId}`
  );
  const data = await response.json();
  const barData = data.payload[0]
  console.log('This is the API get static props',data)
  return {
    props: {
      barInfo: barData,
    },
  };
};

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