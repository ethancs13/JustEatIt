import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_CUISINES } from "../../utils/queries";
import { handleSearch, getRandomRestaurant } from "../../utils/API";
import SearchResults from "../SearchResults";
import GoogleMap from "../GoogleMap";
import IntroText from "./IntroText";
import { Box, Input, Select, Button } from "native-base";

const SearchComponent = () => {
  const [location, setLocation] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [results, setResults] = useState([]);
  const [showMap, setShowMap] = useState(false);

  // Fetch all cuisines
  const { data } = useQuery(QUERY_ALL_CUISINES);

  const search = async () => {
    const data = await handleSearch(location, cuisine);
    setResults(data.businesses);
    setShowMap(true);
  };

  const random = async () => {
    const data = await getRandomRestaurant(location, cuisine);
    setResults([data]);
    setShowMap(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  return (
    <Box>
      <IntroText />
      <Box p={4} mt={results.length > 0 ? 0 : "5%"}>
        <Box flexDirection="row" alignItems="center" justifyContent="center">
          <Select
            placeholder="Select Food Preferences"
            flex={1}
            size="lg"
            fontSize="md"
            colorScheme="orange"
            ml={2}
            mr={2}
            onValueChange={(value) => setCuisine(value)}
          >
            {/* Map through cuisines if data is available */}
            {data?.allCuisines &&
              data.allCuisines.map((cuisine) => (
                <Select.Item
                  key={cuisine.cuisineId}
                  label={cuisine.name}
                  value={cuisine.name}
                />
              ))}
          </Select>
          <Input
            placeholder="Search by city"
            flex={2}
            size="lg"
            colorScheme="orange"
            onChangeText={(text) => setLocation(text)}
            onSubmitEditing={search}
          />
          <Button colorScheme="orange" size="lg" ml={2} onPress={search}>
            Search
          </Button>
          <Button colorScheme="orange" size="lg" ml={2} onPress={random}>
            Just Eat It!
          </Button>
        </Box>
        <GoogleMap locations={results} showMap={showMap} />
        <SearchResults results={results} />
      </Box>
    </Box>
  );
};

export default SearchComponent;