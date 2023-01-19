export default function Map (){
  return <h1>It'll be back soon!</h1>
}

// import { LatLngExpression } from 'leaflet';
// import { MapContainer } from 'react-leaflet';
// import { TileLayer } from 'react-leaflet';
// import { Marker } from 'react-leaflet';
// import { Popup } from 'react-leaflet';
// import * as bardata from '../bar-data.json';
// import { useEffect, useState } from 'react';
// import styles from '../styles/map.module.css'
// import { singleBarType } from '../data/types';
// import { Icon } from "leaflet";


// const customPinIcon = new Icon({
//   iconUrl: "/map-location-pin.png",
//   iconSize: [33, 35],
// });

// export default function Map(){
//   const [barDetails, setBarDetails] = useState<singleBarType[]>([])   
  
//   function getBarDetails() {
//     let tempBarDetailsArr = []
//     for (let i=0; i<bardata.length; i++) {
//       let barArray:singleBarType = {
//         name: bardata[i].Name,
//         address: bardata[i].Address,
//         postcode: bardata[i].Postcode,
//         cost: bardata[i].Cost,
//         rating: bardata[i].Rating,
//         coordinates: [bardata[i].location.coordinates[1], bardata[i].location.coordinates[0]],
//         website: bardata[i].Website
//       }
//     tempBarDetailsArr.push(barArray)  
//     }
//     setBarDetails(tempBarDetailsArr)
//   }
  
//   useEffect(() => {
//     getBarDetails()
//   }, [])

//   return (
//     <div className={styles.map_centering_div}>
//       <MapContainer
//         className={styles.map_container}
//         id="map"
//         data-testId="map-container"
//         center={[53.48, -2.24]}
//         zoom={14}
//         scrollWheelZoom={false}
//         style={{ height: "700px", width: "55%" }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {barDetails.map((element) => (
//           <Marker
//             icon={customPinIcon}
//             key={element.postcode}
//             data-testId="marker"
//             position={element.coordinates}
//           >
//             <div className={styles.popup_container}>
//               <Popup className={styles.request_popup}>
//                 <div className={styles.popup_inner_container}>
//                   {/* Bar name changed from h3 to h4 for demo purposes */}
//                   <div className={styles.bar_name}>
//                     <h4>{element.name}</h4>
//                   </div>
//                   <div className={styles.popup_description}>
//                     <p>{element.address}</p>
//                     <p>Cost: {element.cost}/3</p>
//                     <p>Rating: {element.rating}/5</p>
//                     <a href={element.website} rel="noreferrer" target="_blank">
//                       Website Link
//                     </a>
//                   </div>
//                 </div>
//               </Popup>
//             </div>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }