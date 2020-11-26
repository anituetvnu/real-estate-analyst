import React, { useState, useEffect } from "react";
import MapView, { Marker, animateToRegion } from "react-native-maps";
import { View, ActivityIndicator, Text } from "react-native";
import styles from "./styles";
import * as Location from "expo-location";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Row } from "react-native-table-component";
import { StyleSheet, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { changeLocation } from "../../actions/location";

const MapScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [marker, setMarker] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
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
          createMarker(event.nativeEvent.coordinate);
        }}
        showsUserLocation={true}
      >
        {marker ? (
          <>
            <Marker
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={"Chọn vị trí"}
              description={"description"}
            />
          </>
        ) : (
          <></>
        )}
      </MapView>
      <View
        style={{
          position: "absolute", //use absolute position to show button on top of the map
          top: "90%", //for center align
          left: "80%",
        }}
      ></View>
      {marker ? (
        <View
          style={{
            flexDirection: "column",
            position: "absolute", //use absolute position to show button on top of the map
            top: "85%", //for center align
            left: "10%",
            width: (Dimensions.get("window").width / 100) * 80,
            padding: 5,
            backgroundColor: "white",
            borderRadius: 10,
            justifyContent: "space-around",
          }}
        >
          <Text style={{ alignSelf: "center" }}>Ấn giữa để chọn vị trí</Text>
          <Text style={{ alignSelf: "center" }}>
            Vĩ độ : {marker.latitude.toFixed(3)}
          </Text>
          <Text style={{ alignSelf: "center" }}>
            Kinh độ : {marker.longitude.toFixed(3)}
          </Text>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              alignItems: "center",
              alignContent: "center",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "orange",
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
            onPress={() => {
              const action = changeLocation({
                longitude: marker.longitude,
                latitude: marker.latitude,
              });
              dispatch(action);
              navigation.navigate("Search", {
                screen: "InputScreen",
              });
            }}
          >
            <Text>Chọn vị trí này</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default MapScreen;
