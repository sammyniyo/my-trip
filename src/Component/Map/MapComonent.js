import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";

const center = { lat: -1.9749971444910905, lng: 30.100814930091722 };

function MapComponent({ directionsResponse }) {
  return (
    <GoogleMap
      center={center}
      zoom={15}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
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
