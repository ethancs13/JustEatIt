import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Loader } from "@react-native-google-maps/api";
import { recenterMap } from "../../utils/centerMap";
import axios from "axios";

// import icons
import asian from "./food-icons/asian.png";
import italian from "./food-icons/italian.png";
import mexican from "./food-icons/mexican.png";
import japanese from "./food-icons/japanese.png";
import indian from "./food-icons/indian.png";
import thai from "./food-icons/thai.png";
import vietnamese from "./food-icons/vietnamese.png";
import chinese from "./food-icons/chinese.png";
import vegetarian from "./food-icons/vegetarian.png";
import seafood from "./food-icons/seafood.png";
import breakfast from "./food-icons/breakfast.png";
import mediterranean from "./food-icons/mediterranean.png";
import coffeeshops from "./food-icons/coffee.png";
import steakhouse from "./food-icons/steak.png";
import desserts from "./food-icons/dessert.png";
import fastfood from "./food-icons/fastfood.png";
import defaultIcon from "./food-icons/defaultIcon.png";

const GoogleMap = ({ locations, showMap }) => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const loadMap = async () => {
      if (!showMap || !locations || locations.length === 0) {
        return;
      }

      // custom icons with custom sizing
      const cuisineIcons = {
        asian: { icon: asian, size: 50 },
        mexican: { icon: mexican, size: 50 },
        italian: { icon: italian, size: 50 },
        japanese: { icon: japanese, size: 50 },
        indian: { icon: indian, size: 50 },
        thai: { icon: thai, size: 50 },
        vietnamese: { icon: vietnamese, size: 50 },
        chinese: { icon: chinese, size: 50 },
        vegetarian: { icon: vegetarian, size: 50 },
        seafood: { icon: seafood, size: 50 },
        breakfast: { icon: breakfast, size: 50 },
        mediterranean: { icon: mediterranean, size: 50 },
        fastfood: { icon: fastfood, size: 50 },
        desserts: { icon: desserts, size: 50 },
        coffeeshops: { icon: coffeeshops, size: 50 },
        steakhouse: { icon: steakhouse, size: 50 },
      };

      const apiKeyResponse = await axios.get("https://just-eat-it-be3958285291.herokuapp.com/api/key");
      const apiKey = apiKeyResponse.data.key;

      const loader = new Loader({
        apiKey: apiKey,
        version: "weekly",
      });

      loader.load().then(async () => {
        const { MapView } = await Loader.import("google-maps-react-native");

        const map = (
          <MapView
            style={{ height: 400, width: "95%" }}
            initialRegion={{
              latitude: 37.7749,
              longitude: -122.4194,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {locations.map((location) => {
              let cuisineType = "";
              if (location.categories && location.categories.length > 0) {
                cuisineType = location.categories[0].title.toLowerCase();
              }

              const iconInfo = cuisineIcons[cuisineType] || {
                icon: defaultIcon,
                size: 30,
              }; // Use default icon if icon is not available

              return (
                <MapView.Marker
                  key={location.id}
                  coordinate={{
                    latitude: location.coordinates.latitude,
                    longitude: location.coordinates.longitude,
                  }}
                  title={location.name}
                  image={iconInfo.icon}
                />
              );
            })}
          </MapView>
        );

        // Set markers
        setMarkers(map);
        // Center map around new markers
        // Note: Google Maps for React Native automatically handles centering based on markers
      });
    };

    loadMap();
  }, [locations, showMap]);

  return (
    <View>
      {showMap && (
        <View style={{ alignItems: "center" }}>
          {markers}
        </View>
      )}
    </View>
  );
};

export default GoogleMap;