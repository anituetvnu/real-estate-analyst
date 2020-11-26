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
    fontStyle: "italic",
    fontSize: 16,
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
    fontStyle: "italic",
  },
  selected2: {
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
    fontStyle: "italic",
  },
  submitButton: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "orange",
    marginTop: 10,
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
});

export default styles;
