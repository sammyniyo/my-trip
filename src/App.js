import { Flex, SkeletonText, Box } from "@chakra-ui/react";
import { useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";
import MapComponent from "./Component/Map/MapComonent";
import RouteCalculator from "./Component/Route/RouteCalculator";

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  

  // when the page in not yet loaded
  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        <MapComponent directionsResponse={directionsResponse} />
      </Box>
      <RouteCalculator
        calculateRoute={calculateRoute}
        clearRoute={clearRoute}
        distance={distance}
        duration={duration}
        map={map}
      />
    </Flex>
  );
}

export default App;
