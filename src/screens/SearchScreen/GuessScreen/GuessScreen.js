import React from "react";
import { ImageBackground, Text, View } from "react-native";
import styles from "./styles";

const GuessScreen = ({ route }) => {
  return (
    <ImageBackground style={{ flex: 1 }} source={require("./SearchBG.png")}>
      <View style={styles.container}>
        <Text style={styles.text}>Mã số: {route.params?.result.id}</Text>
        <Text style={styles.text}>
          Địa điểm: {route.params?.result.district}
        </Text>
        <Text style={styles.text}>
          Hướng nhà: {route.params?.result.houseDirection}
        </Text>
        <Text style={styles.text}>
          Hướng ban công: {route.params?.result.balconyDirection}
        </Text>
        <Text style={styles.text}>
          Diện tích: {route.params?.result.acreage} m2
        </Text>
        <Text style={styles.text}>
          Số phòng ngủ: {route.params?.result.bedroom}
        </Text>
        <Text style={styles.text}>
          Số phòng tắm: {route.params?.result.bathroom}
        </Text>
        <Text style={styles.text}>
          Nhà vệ sinh: {route.params?.result.toilet}
        </Text>
        {/* <Text>Giá {route.params?.jsonData.content.money} VNĐ</Text> */}
      </View>
    </ImageBackground>
  );
};

export default GuessScreen;
