import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const History = (props) => {
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
        <ScrollView>
          <View style={styles.content}>
            {props.list.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    switch (props.choose) {
                      case "district":
                        props.setDistrict(item);
                        break;
                      case "bedroom":
                        props.setBedroom(item);
                        break;
                      case "bathroom":
                        props.setBathroom(item);
                        break;
                      case "toilet":
                        props.setToilet(item);
                        break;
                      default:
                        break;
                    }
                    props.setVisible(false);
                  }}
                >
                  <Text style={styles.choose}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default History;
