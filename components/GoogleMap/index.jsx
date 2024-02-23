import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import axios from "axios"; // Import axios for making HTTP requests

const GoogleMap = ({ searchQuery }) => {
  // set intial location
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  });

  // import icons
  const cuisineIcons = {
    asian: { icon: require("./food-icons/asian.png"), size: 40 },
    mexican: { icon: require("./food-icons/mexican.png"), size: 50 },
    italian: { icon: require("./food-icons/italian.png"), size: 50 },
    japanese: { icon: require("./food-icons/japanese.png"), size: 50 },
    indian: { icon: require("./food-icons/indian.png"), size: 50 },
    thai: { icon: require("./food-icons/thai.png"), size: 30 },
    vietnamese: { icon: require("./food-icons/vietnamese.png"), size: 50 },
    chinese: { icon: require("./food-icons/chinese.png"), size: 40 },
    vegetarian: { icon: require("./food-icons/vegetarian.png"), size: 50 },
    seafood: { icon: require("./food-icons/seafood.png"), size: 50 },
    breakfast: { icon: require("./food-icons/breakfast.png"), size: 50 },
    mediterranean: { icon: require("./food-icons/mediterranean.png"), size: 50 },
    fastfood: { icon: require("./food-icons/fastfood.png"), size: 50 },
    desserts: { icon: require("./food-icons/dessert.png"), size: 50 },
    coffeeshops: { icon: require("./food-icons/coffee.png"), size: 50 },
    steakhouse: { icon: require("./food-icons/steak.png"), size: 50 },
    noodles: { icon: require("./food-icons/asian.png"), size: 50 },
    asianfusion: { icon: require("./food-icons/asian.png"), size: 50 },
    ramen: { icon: require("./food-icons/ramen.png"), size: 36 },
    bars: { icon: require("./food-icons/bars.png"), size: 50 },
    dimsum: { icon: require("./food-icons/dimsum.png"), size: 40 },
    sushibars: { icon: require("./food-icons/sushibar.png"), size: 50 },
    izakaya: { icon: require("./food-icons/sushibar.png"), size: 50 },
    korean: { icon: require("./food-icons/korean.png"), size: 50 },
    burmese: { icon: require("./food-icons/burmese.png"), size: 50 },
    tacos: { icon: require("./food-icons/tacos.png"), size: 50 },
    hotpot: { icon: require("./food-icons/hotpot.png"), size: 40 },
    defaultIcon: { icon: require("./food-icons/defaultIcon.png"), size: 30 },
  };

  const [markers, setMarkers] = useState([]);

  // get api info/ set location state
  useEffect(() => {
    if (searchQuery) {
      const fetchCoordinates = async () => {
        try {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
              searchQuery
            )}&inputtype=textquery&fields=geometry&key=AIzaSyC1jbQOJoSOWU-vTp1-JV-ugTHcK6i99WI`
          );

          const latitude = response.data.candidates[0].geometry.location.lat;
          const longitude = response.data.candidates[0].geometry.location.lng;

          console.log(latitude, longitude)
          setLocation({
            latitude,
            longitude,
            latitudeDelta: 0.06,
            longitudeDelta: 0.06,
          });

          const yelpResponse = await axios.get(
            "https://api.yelp.com/v3/businesses/search",
            {
              headers: {
                Authorization: `Bearer _abCHXLDsTb1iK_QqBCA-1cHYbXMzo9SAY5kdrvFkX1_oRMi5TwR9wegMpaUi4RBdhC1io5IWHE64F2iy5V6eVRY-GfxszZkQ1E-nnfhCImX01_LbvNcnK0162O8ZXYx`, // Replace YOUR_API_KEY with your actual Yelp API key
              },
              params: {
                location: `${latitude},${longitude}`,
                term: "asian", // change to dropdown result
                limit: 12,
              },
            }
          );

          const newMarkers = yelpResponse.data.businesses.map((business) => {
            let cuisineType = "";
            if (business.categories && business.categories.length > 0) {
              cuisineType =
                business.categories[0].title.charAt(0).toUpperCase() +
                business.categories[0].title.slice(1);
            }

            const iconKeys = Object.keys(cuisineIcons);
            const cuisineTypeWords = cuisineType.split(" ");
            const cuisineTypeLowercase = cuisineTypeWords.join("").toLowerCase();
            console.log(cuisineTypeLowercase)
            const icon = iconKeys.includes(cuisineTypeLowercase) ? cuisineIcons[cuisineTypeLowercase] : cuisineIcons.defaultIcon;

            return {
              title: business.name,
              description: business.location.address1,
              latitude: business.coordinates.latitude,
              longitude: business.coordinates.longitude,
              icon,
            };
          });

          setMarkers(newMarkers);

        } catch (error) {
          console.error(error);
        }
      };

      fetchCoordinates();
    }
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      {/*Render our MapView*/}
      <MapView
        region={location}
        onMapReady={() => console.log("ready")}
        style={StyleSheet.absoluteFillObject}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            title={marker.title}
            description={marker.description}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          >
            <Image
              source={marker.icon.icon}
              style={{ width: marker.icon.size, height: marker.icon.size }}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // background color
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    margin: 20,
    outlineColor: "black",
    outlineStyle: "solid",
    outlineWidth: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default GoogleMap;