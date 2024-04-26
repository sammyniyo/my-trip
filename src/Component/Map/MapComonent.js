import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useState } from "react";

//default map location
const center = { lat: -1.9749971444910905, lng: 30.100814930091722 };

//change between map types
function MapComponent({ directionsResponse, setDirectionsResponse }) {
  const [mapType, setMapType] = useState("roadmap");

  const toggleMapType = () => {
    const newMapType = mapType === "roadmap" ? "satellite" : "roadmap";
    setMapType(newMapType);
  };
  return (
    <GoogleMap
      center={center}
      zoom={15}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      options={{
        mapTypeControl: true,
        mapTypeControlOptions: {
          mapTypeIds: ["roadmap", "satellite", "terrain"],
        },
      }}
    >
      <Marker position={center} />
      {directionsResponse && (
        <DirectionsRenderer directions={directionsResponse} />
      )}
    </GoogleMap>
  );
}

export default MapComponent;
