import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { View, Text, Dimensions, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import * as Location from "expo-location";

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(location);
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 21.037729,
          longitude: 105.783598,
          latitudeDelta: 0.09,
          longitudeDelta: 0.0,
        }}
        onLongPress={(event) => {
          // console.log(coordinate);
          console.log(event.nativeEvent);
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: 21.037729,
            longitude: 105.783598,
          }}
          title={"title"}
          description={"description"}
        />
      </MapView>
      <View
        style={{
          position: "absolute", //use absolute position to show button on top of the map
          top: "80%", //for center align
          alignSelf: "flex-end", //for align to right
        }}
      >
        {/* <MaterialIcons name="my-location" style={styles.locateButton} /> */}
      </View>
    </View>
  );
};

export default MapScreen;
