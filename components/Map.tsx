import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import styles from '../styles/map.module.css'
import { resultsArrType } from '../data/types';
import { Icon } from "leaflet";
import Link from 'next/link';
import { useEffect } from 'react';

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

  console.log(heroPageQuery)
  console.log(results)

  return (
    <div className={styles.map_centering_div}>
      <MapContainer
        className={styles.map_container}
        id="map"
        data-testId="map-container"
        center={[
          Number(heroPageQuery.location[1]),
          Number(heroPageQuery.location[0]),
        ]}
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
      </MapContainer>
    </div>
  );
}