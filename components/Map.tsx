import { LatLngExpression } from 'leaflet';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';
// import * as bardata from '../bar-data.json';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import styles from '../styles/map.module.css'
import { resultsArrType, singleBarType } from '../data/types';
import { Icon } from "leaflet";


const customPinIcon = new Icon({
  iconUrl: "/map-location-pin.png",
  iconSize: [33, 35],
});

type propsObjType = {
  results: resultsArrType;
  coords: any;
}

export default function Map({results, coords}: propsObjType){
  console.log("COORDSSSSS", coords)
  const [mapResults, setMapResults] = useState<resultsArrType>([])   

  function getCoordinates(){
    const newResults : resultsArrType = results.map(element => {
      element.location.coordinates = [element.location.coordinates[1], element.location.coordinates[0]]
      return element;
    })
    setMapResults(newResults);
  }

  useEffect( () => {
    getCoordinates();
  }, [])

  
  // function getBarDetails() {
  //   let tempBarDetailsArr = []
  //   for (let i=0; i<bardata.length; i++) {
  //     let barArray:singleBarType = {
  //       name: bardata[i].Name,
  //       address: bardata[i].Address,
  //       postcode: bardata[i].Postcode,
  //       cost: bardata[i].Cost,
  //       rating: bardata[i].Rating,
  //       coordinates: [bardata[i].location.coordinates[1], bardata[i].location.coordinates[0]],
  //       website: bardata[i].Website
  //     }
  //   tempBarDetailsArr.push(barArray)  
  //   }
  //   setBarDetails(tempBarDetailsArr)
  // }
  
  // useEffect(() => {
  //   getBarDetails()
  // }, [])

  return (
    <div className={styles.map_centering_div}>
      <MapContainer
        className={styles.map_container}
        id="map"
        data-testId="map-container"
        center={[Number(coords.location[1]), (coords.location[0])]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "700px", width: "55%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapResults.map(element => (
          <Marker
            icon={customPinIcon}
            key={element._id}
            data-testId="marker"
            position={element.location.coordinates}
          >
            <div className={styles.popup_container}>
              <Popup className={styles.request_popup}>
                <div className={styles.popup_inner_container}>
                  {/* Bar name changed from h3 to h4 for demo purposes */}
                  <div className={styles.bar_name}>
                    <h4>{element.Name}</h4>
                  </div>
                  <div className={styles.popup_description}>
                    <p>{element.Address}</p>
                    <p>Cost: {element.Cost}/3</p>
                    <p>Rating: {element.Rating}/5</p>
                    <a href={element.Website} rel="noreferrer" target="_blank">
                      Website Link
                    </a>
                  </div>
                </div>
              </Popup>
            </div>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}