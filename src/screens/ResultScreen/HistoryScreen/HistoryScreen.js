import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ImageBackground, Text } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";
import { History } from "../../SearchScreen/InputScreen/InputScreen";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const HistoryScreen = ({ navigation, route }) => {
  const results = useSelector((state) => state.results);
  const [histories, setHistories] = useState(History);
  const [check, setCheck] = useState(true);
  useEffect(() => {
    setHistories(History);
  }, [check]);
  return (
    <ImageBackground style={{ flex: 1 }} source={require("./SearchBG.png")}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Lịch sử đã tìm kiếm</Text>
            {/* <TouchableOpacity
              style={styles.reloadButton}
              onPress={() => setCheck(!check)}
            >
              <AntDesign name="reload1" size={24} color="black" />
            </TouchableOpacity> */}
          </View>
          <View style={styles.boxHistory}>
            <Text style={styles.boxIDTitle}>ID</Text>
            <Text style={styles.boxDistrictTitle}>Địa điểm</Text>
            <Text style={styles.boxHouseTitle}>Hướng nhà</Text>
            <Text style={styles.boxAcreageTitle}>Diện tích </Text>
          </View>
          {results.map((result, index) => {
            return (
              <TouchableOpacity
                style={styles.boxHistory}
                onPress={() => {
                  navigation.navigate("DetailScreen", {
                    id: result.id,
                    district: result.district,
                    houseDirection: result.houseDirection,
                    balconyDirection: result.balconyDirection,
                    acreage: result.acreage,
                    bedroom: result.bedroom,
                    toilet: result.toilet,
                    furniture: result.furniture,
                    law: result.law,
                    money: result.money,
                  });
                }}
              >
                <Text style={styles.boxTextID}>{result.id}</Text>
                <Text style={styles.boxTextDistrict}>{result.district}</Text>
                <Text style={styles.boxTextHouse}>{result.houseDirection}</Text>
                <Text style={styles.boxTextAcreage}>{result.acreage}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HistoryScreen;
