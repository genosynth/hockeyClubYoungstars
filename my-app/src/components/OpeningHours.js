import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const key = process.env.REACT_APP_GOOGLE_API_KEY;

const containerStyle = {
  width: '400px',
  height: '400px',
  position: "relative"
   

  
};

const center = {
  lat: 35.89416,
  lng: 14.50414
};

export default function Map() {
  return (
  <div className='pagesBox'>
    <h1> OPENING HOURS</h1>
    <h2>Monday - 06:00 - 14:30</h2>
    <h2>Tuesday - 06:00 - 14:00</h2>
    <h2>Wednesday - 06:00 - 14:30 | 18:00 - 23:00</h2>
    <h2>Thursday - 06:00 - 14:30 | 18:00 - 23:00</h2>
    <h2>Friday - 06:00 - 14:30 | 18:00 - 23:00</h2>
    <h2>Saturday - 06:00 - 13:00 | 18:00 - 23:00</h2>
    <h2>Sunday - 09:00 - 14:00 | 18:00 - 23:00</h2>
    <LoadScript
      googleMapsApiKey={key}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}
      >

      <Marker key="marker_1"

      position={{

          lat: 35.89416,

          lng: 14.50414

      }}

    />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </div>
  )
}
