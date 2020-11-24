import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  box: {
    flexDirection: "row",
    marginBottom: 10,
    borderColor: "grey",
    borderBottomWidth: 0.4,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textLeft: {
    fontSize: 18,
    fontWeight: "bold",
    width: windowWidth * 0.45,
  },
  textRight: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
