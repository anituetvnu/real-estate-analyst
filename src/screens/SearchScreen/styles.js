import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 50,
    marginHorizontal: 18,
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
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 4,
    padding: 10,
  },
  text: {
    fontWeight: "bold",
  },
  selected: {
    height: 40,
    marginVertical: 4,
    padding: 10,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    textAlignVertical: "center",
  },
  submitButton: {
    // alignSelf: "center",
    justifyContent: "center",
    borderWidth: 1,
    padding: 5,
    borderColor: "#ff6600",
    borderRadius: 10,
    backgroundColor: "#ff6600",
    position: "absolute",
    bottom: 0,
    width: windowWidth - 36,
  },
  submitText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  }
});

export default styles;
