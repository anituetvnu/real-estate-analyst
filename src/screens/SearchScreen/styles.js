import { StyleSheet } from "react-native";

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
});

export default styles;
