import React from "react";
import GoogleMapReact from 'google-map-react';
import google from 'google-map-react';
import { Link } from "react-router-dom";
import styles from "./map.module.css";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

  const containerStyle = {
    width: '500px',
    height: '500px'
  };
  const center = {
    lat: 43.634657,
      lng: -79.522378
  };
  function SimpleMap(props) {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyALF4Lazl_RdjGP5xn7t0CeHRru8vB2ml4"
    })
    const [map, setMap] = React.useState(null)
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
    }, [])
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={1}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { props.isMarkerShown && <Link to="explore"><Marker position={{ lat: 43.634657, lng: -79.522378 }} /></Link>/* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
  }
export default SimpleMap;
