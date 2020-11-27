import React from "react";
import { ImageBackground, Text, View } from "react-native";
import styles from "./styles";

const GuessScreen = ({ route }) => {
  const a = ">>";
  return (
    <ImageBackground style={{ flex: 1 }} source={require("./SearchBG.png")}>
      <View style={styles.container}>
        <View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Mã số:</Text>
            <Text style={styles.textRight}>{route.params?.id}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Địa điểm:</Text>
            <Text style={styles.textRight}>{route.params?.district}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Hướng nhà:</Text>
            <Text style={styles.textRight}>{route.params?.houseDirection}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Hướng ban công:</Text>
            <Text style={styles.textRight}>
              {route.params?.balconyDirection}
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Số phòng ngủ:</Text>
            <Text style={styles.textRight}>{route.params?.bedroom} phòng</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Số nhà vệ sinh:</Text>
            <Text style={styles.textRight}>{route.params?.toilet} phòng</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Diện tích:</Text>
            <Text style={styles.textRight}>{route.params?.acreage} m2</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Nội thất:</Text>
            {route.params?.furniture ? (
              <Text style={styles.textRight}>{route.params?.furniture}</Text>
            ) : (
              <Text style={styles.textRight}>Không</Text>
            )}
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Pháp lý: </Text>
            {route.params?.law ? (
              <Text style={styles.textRight}>{route.params?.law}</Text>
            ) : (
              <Text style={styles.textRight}>Không</Text>
            )}
          </View>
          <View style={styles.box}>
            <Text style={[styles.textLeft, { color: "red" }]}>{a} Giá:</Text>
            <Text style={[styles.textRight, { color: "red" }]}>
              {route.params?.money} VNĐ
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GuessScreen;
