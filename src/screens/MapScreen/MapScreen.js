import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { View } from "react-native";
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
    // console.log(location);
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
          // console.log(event.nativeEvent);
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
      ></View>
    </View>
  );
};

export default MapScreen;

// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// const MapScreen = () => {
//   return (
//     <View>
//       <Text>Map Screen</Text>
//     </View>
//   );
// };

// export default MapScreen;

// const styles = StyleSheet.create({});
