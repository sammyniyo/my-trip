import {
  Box,
  Button,
  IconButton,
  Input,
  HStack,
  Text,
  ButtonGroup,
  Spinner,
} from "@chakra-ui/react";
import { FaLocationArrow, FaSearch, FaTimes } from "react-icons/fa";
import { Autocomplete, useGeolocation } from "@react-google-maps/api";

import { IconButton } from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa";

function RouteCalculator({
  calculateRoute,
  clearRoute,
  distance,
  duration,
  map,
  originRef,
  destinationRef,
  isLoading,
}) {
  return (
    <Box
      p={4}
      borderRadius="lg"
      m={4}
      bgColor="white"
      shadow="md"
      minW={{ base: "100%", md: "container.md" }}
      zIndex="1"
    >
      <HStack spacing={{ base: 2, md: 4 }} justifyContent="space-between">
        <Box flex={{ base: 1, md: 2 }}>
          <Autocomplete>
            <Input
              type="text"
              placeholder="Enter origin"
              ref={originRef}
              borderColor="gray.300"
              _focus={{ borderColor: "blue.400" }}
              leftIcon={<FaLocationArrow color="gray.400" />}
            />
          </Autocomplete>
        </Box>
        <Box flex={{ base: 1, md: 2 }}>
          <Autocomplete>
            <Input
              type="text"
              placeholder="Enter destination"
              ref={destinationRef}
              borderColor="gray.300"
              _focus={{ borderColor: "blue.400" }}
              leftIcon={<FaSearch color="gray.400" />}
            />
          </Autocomplete>
        </Box>
        <ButtonGroup>
          <Button
            colorScheme="blue"
            isLoading={isLoading}
            loadingText="Calculating"
            type="submit"
            onClick={calculateRoute}
          >
            Calculate
          </Button>
          <IconButton
            aria-label="Clear"
            icon={<FaTimes />}
            onClick={clearRoute}
          />
        </ButtonGroup>
      </HStack>
      <HStack
        spacing={{ base: 2, md: 4 }}
        mt={{ base: 2, md: 4 }}
        justifyContent="space-between"
      >
        <Text fontSize="sm" color="gray.600">
          Distance: {distance || "N/A"}
        </Text>
        <Text fontSize="sm" color="gray.600">
          Duration: {duration || "N/A"}
        </Text>
      </HStack>
    </Box>
  );
}

export default RouteCalculator;
