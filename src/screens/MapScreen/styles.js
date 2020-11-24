import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  locateButton: {
    color: "blue",
    backgroundColor: "white",
    padding: 10,
    width: 51,
    height: 51,
    borderRadius: 100,
  },
});

export default styles;
