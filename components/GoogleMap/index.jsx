import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

const GoogleMap = () => {
  console.log(MapView)
  return (
    <View style={styles.container}>
      {/*Render our MapView*/}
      <MapView
        // initialRegion={{
        //   latitude: 37.78825,
        //   longitude: -122.4324,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set your desired background color
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    margin: 20,
    outlineColor: 'black',
    outlineStyle: 'solid',
    outlineWidth: 1,
  },
});

export default GoogleMap;