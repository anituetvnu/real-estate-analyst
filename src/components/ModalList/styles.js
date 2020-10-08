import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 18,
  },
  header: {
    flexDirection: "row",
  },
  choose: {
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  backButton: {
    fontSize: 24,
    color: "black",
    padding: 10,
    paddingLeft: 0,
  },
  title: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "grey",
    textAlign: "center",
    fontSize: 20,
  },
});

export default styles;
