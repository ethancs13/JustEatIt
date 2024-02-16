import React from 'react';
import { View, StyleSheet } from 'react-native';
import GoogleMap from '../components/GoogleMap'; // Import GoogleMap component
import HomeSearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <View style={styles.container}>
      <HomeSearchBar />
      <GoogleMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Set your desired background color
    alignItems: 'center',
    justifyContent: 'center',
  },
});