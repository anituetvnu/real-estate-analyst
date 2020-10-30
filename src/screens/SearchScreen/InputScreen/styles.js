import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 18,
    marginTop: Constants.statusBarHeight,
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
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    marginLeft: 5,
    fontSize: 18,
  },
  selected: {
    height: 40,
    marginBottom: 10,
    padding: 10,
    borderColor: "orange",
    borderRadius: 10,
    borderWidth: 2,
    color: "black",
    fontSize: 15,
    textAlignVertical: "center",
  },
  submitButton: {
    justifyContent: "center",
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    position: "absolute",
    bottom: 10,
    width: windowWidth - 36,
    borderColor: "orange",
    backgroundColor: "orange",
  },
  submitText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default styles;
