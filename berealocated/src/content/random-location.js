import React from "react";
import google from 'google-map-react';
function RandomLoc() {

    var southWest = new google.maps.LatLng(43.634657, -79.522378);
    var northEast = new google.maps.LatLng(43.921647, -79.288726);
    var lngSpan = northEast.lng() - southWest.lng();
    var latSpan = northEast.lat() - southWest.lat();

    var markers = [];

    var myLatlng = new google.maps.LatLng(38.392303, -86.931067);

    var map = new google.maps.Map(document.getElementById("map-canvas"), {
        zoom: 4,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // Create some markers
    for (var i = 1; i < 2; i++) {

        var location = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random());

        var marker = new google.maps.Marker({
            position: location,
            map: map
        });

        markers.push(marker);
    }
}

RandomLoc();