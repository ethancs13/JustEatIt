import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_FAVORITE } from "../../utils/mutations";
import { Pressable } from "react-native";

const AddFavoriteButton = ({ restaurant }) => {
  const [addFavorite] = useMutation(ADD_FAVORITE);
  const [isFavorited, setIsFavorited] = useState(false);

  const bothId = restaurant.id || restaurant.businessId;
  const imageUrl = restaurant.image || restaurant.image_url;
  const address =
    typeof restaurant.location === "object"
      ? restaurant.location.address1
      : restaurant.location;

  const handleAddFavorite = async () => {
    const restaurantData = {
      businessId: bothId,
      name: restaurant.name,
      rating: restaurant.rating,
      image: imageUrl,
      url: restaurant.url,
      location: address,
    };

    try {
      await addFavorite({ variables: { restaurantData: restaurantData } });
      setIsFavorited(true);
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  };

  return (
    <Pressable title={isFavorited ? "Added to Favorites!" : "Favorite"} onPress={handleAddFavorite} />
  );
};

export default AddFavoriteButton;