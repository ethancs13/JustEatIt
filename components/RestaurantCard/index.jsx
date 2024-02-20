import React from "react";
import { View, Text, Pressable, Image, Linking } from "react-native";
import auth from "../../utils/auth";

const RestaurantCard = ({ restaurant, favoritePage, onUpdate }) => {
  if (!restaurant) {
    return null;
  }

  const imageUrl = restaurant.image || restaurant.image_url;
  const address =
    typeof restaurant.location === "object"
      ? restaurant.location.address1
      : restaurant.location;

  const handleYelpLink = () => {
    Linking.openURL(restaurant.url);
  };

  return (
    <View>
      <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
      <Text style={styles.restCardTitle}>{restaurant.name}</Text>
      <Text style={styles.restCardDescription}>{restaurant.rating} ⭐️</Text>
      <Text style={styles.restCardDescription}>{address}</Text>
      {!favoritePage && auth.loggedIn() && (
        <AddFavoriteButton restaurant={restaurant} />
      )}
      {favoritePage && auth.loggedIn() && (
        <RemoveFavoriteButton restaurant={restaurant} onUpdate={onUpdate} />
      )}
      <Pressable title="View on Yelp for more details." onPress={handleYelpLink} />
    </View>
  );
};

export default RestaurantCard;