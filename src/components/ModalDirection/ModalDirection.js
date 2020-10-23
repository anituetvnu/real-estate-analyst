import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

// const arrow = require("../../../assets/arrow.png");

const ModalDirection = (props) => {
  const [direct, setDirect] = useState("");

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          switch (props.choose) {
            case 1:
              props.setDirect("Tây Bắc");
              break;
            case 2:
              setDirect("Bắc");
              break;
            case 3:
              setDirect("Đông Bắc");
              break;
            case 4:
              setDirect("Tây");
              break;
            case 6:
              setDirect("Đông");
              break;
            case 7:
              setDirect("Tây Nam");
              break;
            case 8:
              setDirect("Nam");
              break;
            case 9:
              setDirect("Đông Nam");
              break;
            default:
              break;
          }

          switch (props.choose) {
            case "houseDirection":
              props.setHouseDirection(direct);
              break;
            case "balconyDirection":
              props.setBalconyDirection(direct);
              break;
            default:
              break;
          }
          props.setVisible(false);
        }}
      ></TouchableOpacity>
    );
  };

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
        {/* <Text>{direct}</Text> */}
      </View>
      <View style={styles.arrowContainer}>
        <View style={styles.row}>
          <FlatList
            data={props.list}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.id)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalDirection;
