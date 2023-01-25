import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import styles from '../styles/map.module.css'
import { resultsArrType } from '../data/types';
import { Icon } from "leaflet";
import Link from 'next/link';
import {useEffect, useState} from 'react'
import { slice } from 'cypress/types/lodash';

const customPinIcon = new Icon({
  iconUrl: "/map-location-pin.png",
  iconSize: [33, 35],
});

type propsObjType = {
  results: resultsArrType;
  heroPageQuery: {
    location: string[] | string;
    searchInputPlaceholder: string;
  };
}


export default function Map({results, heroPageQuery}: propsObjType){
let [firstCoordAverage, setFirstCoordAverage] = useState<null|number>(null)
let [secondCoordAverage, setSecondCoordAverage] = useState<null|number>(null)
  useEffect(()=>{
    function coordAverage(){
      let firstCoord = 0
      let secondCoord = 0
      for (let i=0; i<results.length; i++) {
        firstCoord = firstCoord + results[i].location.coordinates[0]
        secondCoord = secondCoord + results[i].location.coordinates[1]
        }
        firstCoord = firstCoord / (results.length)
        secondCoord = secondCoord/ (results.length)
      console.log("this is correct", firstCoord)
      console.log("this is correct as well hopefully", secondCoord)
      setFirstCoordAverage(firstCoord)
      setSecondCoordAverage(secondCoord)
    }
      coordAverage()
      console.log("this one needs to be the same as the first one", firstCoordAverage)
    }, [results])

  return (
    <div className={styles.map_centering_div}>
        {firstCoordAverage ? <MapContainer
        className={styles.map_container}
        id="map"
        data-testId="map-container"
        center={[firstCoordAverage!, secondCoordAverage!]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "700px", width: "55%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {results.map((element) => (
          <Marker
            icon={customPinIcon}
            key={element._id}
            data-testId="marker"
            position={element.location.coordinates}
          >
            <div className={styles.popup_container}>
              <Popup className={styles.request_popup}>
                <Link
                  href={`/bar/${element._id}`}
                  key={element._id}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className={styles.popup_inner_container}>
                    {/* Bar name changed from h3 to h4 for demo purposes */}

                    <div className={styles.bar_name}>
                      <h4>{element.Name}</h4>
                    </div>

                    <div className={styles.popup_description}>
                      <p>{element.Address}</p>
                      <strong>
                        <p>
                          Cost:&nbsp; {"£ ".repeat(element.Cost)}
                          <span className={styles.cost_light_icon}>
                            {"£ ".repeat(3 - element.Cost)}
                          </span>
                        </p>
                      </strong>
                      <p>
                        Rating:&nbsp; {"★ ".repeat(element.Rating)}
                        {"☆ ".repeat(5 - element.Rating)}
                      </p>
                    </div>
                  </div>
                </Link>
              </Popup>
            </div>
          </Marker>
        ))}
      </MapContainer>: null}
    </div>
  );
}