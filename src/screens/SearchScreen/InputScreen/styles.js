import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const color = " rgb(224, 224, 224)";
const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "relative",
  },
  loading: {
    flex: 1,
    position: "absolute",
    // marginLeft: 0.23 * windowHeight,
    // marginTop: 0.35 * windowHeight,
    marginLeft: "auto",
    marginRight: "auto",
    top: 0.5 * windowHeight - 115,
    left: 0.5 * windowWidth - 19,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 20,
    marginTop: 50,
  },
  picker: {
    height: 50,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  inputAcreage: {
    height: 40,
    borderRadius: 10,
    borderColor: "orange",
    borderWidth: 2,
    marginBottom: 10,
    // padding: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
    backgroundColor: color,
  },
  text: {
    fontWeight: "bold",
    fontSize: 17,
  },
  requiredText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "red",
  },
  selected: {
    height: 40,
    marginBottom: 10,
    padding: 10,
    borderColor: "orange",
    borderRadius: 10,
    borderWidth: 2,
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: color,
    color: "black",
  },
  submitButton: {
    flex: 1,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "orange",
    marginTop: 20,
  },
  submitText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  spaceLeft: {
    flex: 1,
    marginRight: 10,
  },
  spaceRight: {
    flex: 1,
    marginLeft: 10,
  },
  result: {
    marginTop: 40,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    backgroundColor: "green",
    borderRadius: 10,
    padding: 50,
  },
});

export default styles;
