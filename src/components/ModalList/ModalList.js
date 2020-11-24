import React from "react";
import { Text, View, Modal, TouchableOpacity, FlatList } from "react-native";
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
            case "houseDirection":
              props.setHouseDirection(item.name);
              break;
            case "balconyDirection":
              props.setBalconyDirection(item.name);
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
            case "furniture":
              props.setFurniture(item.name);
              break;
            case "law":
              props.setLaw(item.name);
              break;
            default:
              break;
          }
          props.setVisible(false);
        }}
      >
        <Text style={styles.choose}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.modalContainer}>
      <Modal
        visible={props.visible}
        transparent={true}
        animationType="fade"
        propagateSwipe={true}
        statusBarTranslucent={false}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => props.setVisible(false)}>
              <Ionicons name="ios-arrow-back" style={styles.backButton} />
            </TouchableOpacity>
            <Text style={styles.title}>{props.choose.toUpperCase()}</Text>
          </View>
          <FlatList
            data={props.list}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.id)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModalList;
