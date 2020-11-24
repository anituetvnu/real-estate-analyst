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
            <Text style={styles.textRight}>{route.params?.result.id}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Địa điểm:</Text>
            <Text style={styles.textRight}>
              {route.params?.result.district}
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Hướng nhà:</Text>
            <Text style={styles.textRight}>
              {route.params?.result.houseDirection}
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Hướng ban công:</Text>
            <Text style={styles.textRight}>
              {route.params?.result.balconyDirection}
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Số phòng ngủ:</Text>
            <Text style={styles.textRight}>{route.params?.result.bedroom}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Số nhà vệ sinh:</Text>
            <Text style={styles.textRight}>{route.params?.result.toilet}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Diện tích:</Text>
            <Text style={styles.textRight}>
              {route.params?.result.acreage} m2
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Nội thất:</Text>
            <Text style={styles.textRight}>
              {route.params?.result.furniture}
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLeft}>Pháp lý: </Text>
            <Text style={styles.textRight}>{route.params?.result.law}</Text>
          </View>
          <View style={styles.box}>
            <Text style={[styles.textLeft, { color: "red" }]}>{a} Giá:</Text>
            <Text style={[styles.textRight, { color: "red" }]}>
              {route.params?.result.money} VNĐ
            </Text>
          </View>
          {/* <View></View>
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
            Số phòng ngủ: {route.params?.result.bedroom}
          </Text>
          <Text style={styles.text}>
            Số nhà vệ sinh: {route.params?.result.toilet}
          </Text>
          <Text style={styles.text}>
            Diện tích: {route.params?.result.acreage} m2
          </Text>
          <Text style={styles.text}>
            Nội thất: {route.params?.result.furniture}
          </Text>
          <Text style={styles.text}>Pháp lý: {route.params?.result.law}</Text>
          <Text style={styles.text}>Giá: {route.params?.result.money} VNĐ</Text> */}
        </View>
        {/* <View>
            <DataTable>
              <DataTable.Row key={route.params?.result.district}>
                <DataTable.Cell>Địa chỉ</DataTable.Cell>
                <DataTable.Cell>{route.params?.result.district}</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row key={route.params?.result.houseDirection}>
                <DataTable.Cell>Hướng nhà</DataTable.Cell>
                <DataTable.Cell>
                  {route.params?.result.houseDirection}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row key={route.params?.result.balconyDirection}>
                <DataTable.Cell>Hướng ban công</DataTable.Cell>
                <DataTable.Cell>
                  {route.params?.result.balconyDirection}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row key={route.params?.result.bedroom}>
                <DataTable.Cell>Số phòng ngủ</DataTable.Cell>
                <DataTable.Cell>{route.params?.result.bedroom}</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row key={route.params?.result.toilet}>
                <DataTable.Cell>Số nhà vệ sinh</DataTable.Cell>
                <DataTable.Cell>{route.params?.result.toilet}</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row key={route.params?.result.acreage}>
                <DataTable.Cell>Diện tích</DataTable.Cell>
                <DataTable.Cell>
                  {route.params?.result.acreage} m2
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row key={route.params?.result.furniture}>
                <DataTable.Cell>Nội thất</DataTable.Cell>
                <DataTable.Cell>
                  {route.params?.result.furniture}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row key={route.params?.result.law}>
                <DataTable.Cell>Pháp lý</DataTable.Cell>
                <DataTable.Cell>{route.params?.result.law}</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row key={route.params?.result.money}>
                <DataTable.Cell>Giá</DataTable.Cell>
                <DataTable.Cell>
                  {route.params?.result.money} VNĐ
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </View> */}
      </View>
    </ImageBackground>
  );
};

export default GuessScreen;
