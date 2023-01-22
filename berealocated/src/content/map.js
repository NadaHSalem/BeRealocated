import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import google from 'google-map-react';
import { GoogleMap, useJsApiLoader, Marker, mar } from '@react-google-maps/api';

  const containerStyle = {
    width: '500px',
    height: '500px'
  };
  const defaultPoint = {
    lat:43.634657,
    lng: -79.522378
  };
  const points = [
    {name: "1", position: {lat: 43.634657, lng:-79.522378}},
    {position: {lat: 43.642567, lng:-79.387054}},
      {position: {lat: 43.725600, lng:-79.4527}}
  ]
  function SimpleMap(props) {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyALF4Lazl_RdjGP5xn7t0CeHRru8vB2ml4"
    })
    const [map, setMap] = React.useState(null)
    const onLoad = React.useCallback(function callback(map) {
      map.setZoom(10)
      setMap(map)
    }, [])
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
    var markers = [];
    let i = 0;
    var marker = useState(null);
    const Iterate = () =>
    {

      const latLngArray = [];
      for (i = 0; i < points.length-1; i++){
        const location = new google.maps(points[i][0], points[i][1]);
        latLngArray.push(location);
        marker = new google.maps.Marker({
          position: location,
          map: map
      });
      markers.push(marker);
      }

    }
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultPoint}
          defaultZoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          
          {points.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          label={name}
        >
        </Marker>
      ))}
        
        </GoogleMap>
        
    ) : <></>
  }
export default SimpleMap;
