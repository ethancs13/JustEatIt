import React, { useState } from "react";
import { TextInput, Button, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const HomeSearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const navigation = useNavigation();

  const handleSearch = () => {
    if (location.trim() !== "") {
      onSearch(location); // Pass the search query to the parent component
    }
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        placeholder="Enter a city..."
        value={location}
        onChangeText={setLocation}
      />
      <Button style={styles.button} title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = {
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  button: {
    
  }
};

export default HomeSearchBar;