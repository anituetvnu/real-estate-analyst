import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";



const ModalList = (props) => {

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          switch (props.choose) {
            case "district":
              props.setDistrict(item.name);
              break;
            case "subDistrict":
              props.setSubDistrict(item.name);
              break;
            case "bedroom":
              props.setBedroom(item.name);
              break;
            case "bathroom":
              props.setBathroom(item.name);
              break;
            case "toilet":
              props.setToilet(item.name);
              break;
            default:
              break;
          }
          console.log(item)
          props.setVisible(false);
        }}
      >
        <Text style={styles.choose}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <Modal
      visible={props.visible}
      transparent={false}
      animationType="fade"
      propagateSwipe={true}
      statusBarTranslucent={false}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.setVisible(false)}>
            <Ionicons name="ios-arrow-back" style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.title}>CHỌN</Text>
        </View>
        <FlatList
          data={props.list}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
        />
      </View>
    </Modal>
  );
};

export default ModalList;
