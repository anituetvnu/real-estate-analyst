import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const a = 2.5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  reloadButton: {
    justifyContent: "center",
  },
  boxHistory: {
    flexDirection: "row",
    justifyContent: "center",
  },
  boxIDTitle: {
    width: 0.1 * windowWidth,
    paddingVertical: 10,
    borderColor: "orange",
    color: "black",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    borderTopWidth: a,
    borderLeftWidth: a,
    borderBottomWidth: a,
  },
  boxDistrictTitle: {
    width: 0.4 * windowWidth,
    paddingVertical: 10,
    borderColor: "orange",
    color: "black",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    borderTopWidth: a,
    borderBottomWidth: a,
    borderLeftWidth: a,
  },
  boxHouseTitle: {
    width: 0.25 * windowWidth,
    paddingVertical: 10,
    borderColor: "orange",
    color: "black",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    borderTopWidth: a,
    borderBottomWidth: a,
    borderLeftWidth: a,
  },
  boxAcreageTitle: {
    width: 0.2 * windowWidth,
    paddingVertical: 10,
    borderColor: "orange",
    color: "black",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    borderTopWidth: a,
    borderLeftWidth: a,
    borderBottomWidth: a,
    borderRightWidth: a,
  },
  /*
  
    //SPACE
  
  */
  boxTextID: {
    width: 0.1 * windowWidth,
    paddingVertical: 10,
    borderColor: "orange",
    color: "black",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    borderLeftWidth: a,
    borderBottomWidth: a,
  },
  boxTextDistrict: {
    width: 0.4 * windowWidth,
    paddingVertical: 10,
    borderColor: "orange",
    color: "black",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    borderLeftWidth: a,
    borderBottomWidth: a,
  },
  boxTextHouse: {
    width: 0.25 * windowWidth,
    paddingVertical: 10,
    borderColor: "orange",
    color: "black",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    borderLeftWidth: a,
    borderBottomWidth: a,
  },
  boxTextAcreage: {
    width: 0.2 * windowWidth,
    paddingVertical: 10,
    borderColor: "orange",
    color: "black",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    borderLeftWidth: a,
    borderRightWidth: a,
    borderBottomWidth: a,
  },
});

export default styles;
