import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  modalContainer: {},
  container: {
    flexDirection: "column",
    marginTop: windowHeight * 0.1,
    marginBottom: windowHeight * 0.2,
    marginHorizontal: windowWidth * 0.2,
    backgroundColor: "white",
    borderColor: "orange",
    borderWidth: 4,
    borderRadius: 20,
  },
  header: {
    backgroundColor: " rgb(221, 221, 221)",
    flexDirection: "row",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  choose: {
    paddingVertical: 10,
    borderTopWidth: 1,
    // borderTopColor: "grey",
    textAlign: "center",
  },
  backButton: {
    fontSize: 24,
    color: "black",
    padding: 10,
    paddingLeft: 0,
    marginLeft: 10,
  },
  title: {
    flex: 1,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
