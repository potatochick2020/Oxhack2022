import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../../styles/global.css";
export default function GoGoMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCJdsRVRo0TL3n0B3X9gYliG2nSESA-ERc",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    </>
  );
}
