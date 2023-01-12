import { LatLngExpression } from 'leaflet';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import * as bardata from '../bar-data.json';
import { useEffect, useState } from 'react';

type singleBarType = {
    name: string, 
    address: string,
    postcode: string, 
    cost: number,
    rating: number, 
    coordinates: [number,number],
    website: string
}



export default function Map(){
  const [barDetails, setBarDetails] = useState<singleBarType[]>([])   
  
  function getBarDetails() {
    let tempBarDetailsArr = []
    for (let i=0; i<bardata.length; i++) {
      let barArray:singleBarType = {
        name: bardata[i].Name,
        address: bardata[i].Address,
        postcode: bardata[i].Postcode,
        cost: bardata[i].Cost,
        rating: bardata[i].Rating,
        coordinates: [bardata[i].location.coordinates[1], bardata[i].location.coordinates[0]],
        website: bardata[i].Website
      }
    tempBarDetailsArr.push(barArray)  
    }
    setBarDetails(tempBarDetailsArr)
  }
  
  useEffect(() => {
    getBarDetails()
  }, [])


    return (
        <MapContainer id="map" center={[53.48, -2.24]} zoom={13} scrollWheelZoom={false} style={{height: "600px", width: "90%"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {barDetails.map((element) => <Marker key={element.postcode} position={element.coordinates}>
            <Popup>
              <h3>{element.name}</h3>
              <p>{element.address}</p>
              <p>Cost: {element.cost}/3</p>
              <p>Rating: {element.rating}/5</p>
              <a href={element.website} rel="noreferrer" target="_blank">Website</a>
            </Popup>
          </Marker>)}
        </MapContainer>
    );
}