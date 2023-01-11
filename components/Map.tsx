import { LatLngExpression } from 'leaflet';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import * as bardata from '../bar-data.json';

type barArray = {
    City: string,
    Name: string,
    Cost: number,
    Description: string,
    Image: string,
    Rating: number,
    Address: string,
    Postcode: string,
    Hygiene: number,
    Happy_hr: string,
    Website: string,
    Music: string[],
    Venue_type: string[],
    Other: string[],
    Vibe: string[],
    Features: string[],
    Who_with: string[],
    coordinates: [number, number]
}[]

export default function Map(){


    return (
        <MapContainer id="map" center={[53.48, -2.24]} zoom={13} scrollWheelZoom={false} style={{height: "600px", width: "90%"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {bardata.map((element) => <Marker key={element.Postcode} position={element.coordinates}>
            <Popup>
              <h3>{element.Name}</h3>
              <p>{element.Address}</p>
              <p>Cost: {element.Cost}/3</p>
              <p>Rating: {element.Rating}/5</p>
              <a href={element.Website} rel="noreferrer" target="_blank">Website</a>
            </Popup>
          </Marker>)}
        </MapContainer>
    );
}