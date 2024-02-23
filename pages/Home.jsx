import { View, StyleSheet } from 'react-native';
import GoogleMap from '../components/GoogleMap'; // Import GoogleMap component
import HomeSearchBar from '../components/HomeSearchBar';
import React, { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <HomeSearchBar onSearch={handleSearch} />
      <GoogleMap searchQuery={searchQuery} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ggg', // Set your desired background color
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});