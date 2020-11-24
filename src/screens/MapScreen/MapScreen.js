import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";
import * as Location from "expo-location";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const MapScreen = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [marker, setMarker] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLoading(false);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    // console.log(location.coords.latitude);
  }

  const createMarker = (coordinate) => {
    setMarker(coordinate);
  };

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.0,
        }}
        onLongPress={(event) => {
          console.log(event.nativeEvent.coordinate);
          createMarker(event.nativeEvent.coordinate);
        }}
      >
        {marker ? (
          <MapView.Marker
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={"Chọn vị trí"}
            description={"description"}
          />
        ) : (
          <></>
        )}
        <MapView.Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title={"title"}
          description={"description"}
        />
      </MapView>
      <View
        style={{
          position: "absolute", //use absolute position to show button on top of the map
          top: "90%", //for center align
          left: "80%",
        }}
      >
        <TouchableOpacity style={styles.locateButton} onPress={() => {}}>
          <Ionicons name="md-locate" size={32} color="black" />
        </TouchableOpacity>
      </View>
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
