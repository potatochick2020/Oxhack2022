import { useState, useEffect, useRef } from "react";
import {
  GoogleMapProvider,
  useGoogleMap,
} from "@ubilabs/google-maps-react-hooks";
import "../../styles/global.css";

const mapOptions = {
  zoom: 12,
  center: {
    lat: 43.68,
    lng: -79.43,
  },
};

export default function MarkersMap() {
  const [mapContainer, setMapContainer] = useState(null);

  return (
    <GoogleMapProvider
      googleMapsAPIKey={"AIzaSyCJdsRVRo0TL3n0B3X9gYliG2nSESA-ERc"}
      options={mapOptions}
      mapContainer={mapContainer}
    >
      <div ref={(node) => setMapContainer(node)} style={{ height: "94vh" }} />
      <Location lat={60} lng={60} />
      <Location lat={60.1} lng={60.1} />
    </GoogleMapProvider>
  );
}

function Location(props) {
  const { map } = useGoogleMap();
  const markerRef = useRef();

  useEffect(() => {
    if (!map || markerRef.current) return;
    markerRef.current = new window.google.maps.Marker({ map });
  }, [map]);

  useEffect(() => {
    if (!markerRef.current) return;
    markerRef.current.setPosition({ lat: props.lat, lng: props.lng });
    map.panTo({ lat: props.lat, lng: props.lng });
  }, [props.lat, props.lng, map]);

  return <></>;
}
