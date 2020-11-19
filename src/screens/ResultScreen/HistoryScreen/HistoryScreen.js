import React, { useState } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import { DataTable } from "react-native-paper";
import { useSelector } from "react-redux";
import styles from "./styles";

const HistoryScreen = ({ navigation }) => {
  const results = useSelector((state) => state.results);
  // const [results, setResults] = useState([
  //   {
  //     id: 1,
  //     district: 1,
  //     houseDirection: 1,
  //     balconyDirection: 1,
  //     acreage: 1,
  //     bedroom: 1,
  //     bathroom: 1,
  //     toilet: 1,
  //   },
  //   {
  //     id: 2,
  //     district: 1,
  //     houseDirection: 1,
  //     balconyDirection: 1,
  //     acreage: 1,
  //     bedroom: 1,
  //     bathroom: 1,
  //     toilet: 1,
  //   },
  //   {
  //     id: 3,
  //     district: 1,
  //     houseDirection: 1,
  //     balconyDirection: 1,
  //     acreage: 1,
  //     bedroom: 1,
  //     bathroom: 1,
  //     toilet: 1,
  //   },
  // ]);

  return (
    <ImageBackground style={{ flex: 1 }} source={require("./SearchBG.png")}>
      <View style={styles.container}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Title>Địa điểm</DataTable.Title>
            <DataTable.Title>Hướng nhà</DataTable.Title>
            <DataTable.Title numeric>Diện tích</DataTable.Title>
          </DataTable.Header>
          {/* {results.map((result) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("DetailScreen", {
                    id: result.id,
                    district: result.district,
                    houseDirection: result.houseDirection,
                    balconyDirection: result.balconyDirection,
                    acreage: result.acreage,
                    bedroom: result.bedroom,
                    bathroom: result.bathroom,
                    toilet: result.toilet,
                  });
                }}
              >
                <DataTable.Row key={result.id}>
                  <DataTable.Cell>{result.id}</DataTable.Cell>
                  <DataTable.Cell>{result.district}</DataTable.Cell>
                  <DataTable.Cell>{result.houseDirection}</DataTable.Cell>
                  <DataTable.Cell numeric>{result.acreage}</DataTable.Cell>
                </DataTable.Row>
              </TouchableOpacity>
            );
          })} */}
          {console.log(results)}
          <DataTable.Pagination
            page={1}
            numberOfPages={3}
            onPageChange={(page) => {
              console.log(page);
            }}
            label="1-2 of 6"
          />
        </DataTable>
      </View>
    </ImageBackground>
  );
};

export default HistoryScreen;
