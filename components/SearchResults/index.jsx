import React from "react";
import { View, FlatList } from "react-native";
import RestaurantCard from "../RestaurantCard";

const SearchResults = ({ results }) => {
  return (
    <View style={styles.resultsWrapper}>
      <FlatList
        data={results}
        renderItem={({ item }) => (
          <RestaurantCard restaurant={item} favoritePage={false} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cardContainer}
      />
    </View>
  );
};

const styles = {
  resultsWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    paddingHorizontal: 10,
  },
};

export default SearchResults;