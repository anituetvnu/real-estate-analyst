import React from "react";
import { ImageBackground, Text, View } from "react-native";
import styles from "./styles";

const DetailScreen = ({ route }) => {
  return (
    <ImageBackground style={{ flex: 1 }} source={require("./SearchBG.png")}>
      <View style={styles.container}>
        <Text style={styles.text}>Mã số: {route.params?.id}</Text>
        <Text style={styles.text}>Địa điểm: {route.params?.district}</Text>
        <Text style={styles.text}>
          Hướng nhà: {route.params?.houseDirection}
        </Text>
        <Text style={styles.text}>
          Hướng ban công: {route.params?.balconyDirection}
        </Text>
        <Text style={styles.text}>Diện tích: {route.params?.acreage}m2</Text>
        <Text style={styles.text}>Số phòng ngủ: {route.params?.bedroom}</Text>
        <Text style={styles.text}>Số phòng tắm: {route.params?.bathroom}</Text>
        <Text style={styles.text}>Nhà vệ sinh: {route.params?.toilet}</Text>
        <Text style={styles.text}>Giá {route.params?.money} VNĐ</Text>
      </View>
    </ImageBackground>
  );
};

export default DetailScreen;
