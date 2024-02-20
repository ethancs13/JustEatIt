import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_FAVORITE } from "../../utils/mutations";
import { Pressable } from "react-native";

const RemoveFavoriteButton = ({ restaurant, onUpdate }) => {
  const [removeFavorite] = useMutation(REMOVE_FAVORITE);
  const bothId = restaurant.id || restaurant.businessId;

  const handleRemoveFavorite = async () => {
    try {
      await removeFavorite({ variables: { businessId: bothId } });
      onUpdate();
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  return (
    <Pressable title="Remove Favorite" onPress={handleRemoveFavorite} />
  );
};

export default RemoveFavoriteButton;