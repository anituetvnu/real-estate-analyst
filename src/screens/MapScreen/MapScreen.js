import React from "react";
import MapView from 'react-native-maps';
import { View, Text, Dimensions } from "react-native";
import styles from "./styles";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
        onLongPress={(event) => {
          // console.log(coordinate);
          console.log(event.nativeEvent);
        }}
      />
    </View>
  );
};

export default MapScreen;

