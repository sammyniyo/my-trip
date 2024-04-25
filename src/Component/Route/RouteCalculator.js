import {
  Box,
  Center,
  Button,
  IconButton,
  Input,
  HStack,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import { Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";

function RouteCalculator({
  calculateRoute,
  clearRoute,
  distance,
  duration,
  map,
}) {
  const originRef = useRef();
  const destinationRef = useRef();

  return (
    <Box
      p={4}
      borderRadius="lg"
      m={4}
      bgColor="white"
      shadow="base"
      minW="container.md"
      zIndex="1"
    >
      <HStack spacing={2} justifyContent="space-between">
        <Box flexGrow={1}>
          <Autocomplete>
            <Input type="text" placeholder="Origin" ref={originRef} />
          </Autocomplete>
        </Box>
        <Box flexGrow={1}>
          <Autocomplete>
            <Input type="text" placeholder="Destination" ref={destinationRef} />
          </Autocomplete>
        </Box>
        <ButtonGroup>
          <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
            Calculate Route
          </Button>
          <IconButton
            aria-label="center back"
            icon={<FaTimes />}
            onClick={clearRoute}
          />
        </ButtonGroup>
      </HStack>
      <HStack spacing={4} mt={4} justifyContent="space-between">
        <Text>Distance: {distance} </Text>
        <Text>Duration: {duration} </Text>
        <IconButton
          aria-label="center back"
          icon={<FaLocationArrow />}
          isRound
          onClick={() => {
            map.panTo(Center);
            map.setZoom(15);
          }}
        />
      </HStack>
    </Box>
  );
}

export default RouteCalculator;
