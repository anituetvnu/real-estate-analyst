import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import { DataTable } from "react-native-paper";
import { useSelector } from "react-redux";
import styles from "./styles";
import { History } from "../../SearchScreen/InputScreen/InputScreen";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const itemsPerPage = 5;

const HistoryScreen = ({ navigation, route }) => {
  const [page, setPage] = React.useState(0);
  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;

  const results = useSelector((state) => state.results);
  const [histories, setHistories] = useState(History);
  // setHistories(History);
  const [check, setCheck] = useState(true);
  useEffect(() => {
    setHistories(History);
  }, [check]);
  return (
    <ImageBackground style={{ flex: 1 }} source={require("./SearchBG.png")}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={{ alignItems: "flex-end", marginRight: 20 }}
            onPress={() => setCheck(!check)}
          >
            <AntDesign name="reload1" size={24} color="black" />
          </TouchableOpacity>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>ID</DataTable.Title>
              <DataTable.Title>Địa điểm</DataTable.Title>
              <DataTable.Title numeric>Diện tích (m2)</DataTable.Title>
            </DataTable.Header>
            {histories.map((result) => {
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
                      toilet: result.toilet,
                      furniture: result.furniture,
                      law: result.law,
                      money: result.money,
                    });
                  }}
                >
                  <DataTable.Row key={result.district}>
                    <DataTable.Cell>{result.id}</DataTable.Cell>
                    <DataTable.Cell>{result.district}</DataTable.Cell>
                    <DataTable.Cell numeric>{result.acreage}</DataTable.Cell>
                  </DataTable.Row>
                </TouchableOpacity>
              );
            })}
            <DataTable.Pagination
              page={page}
              numberOfPages={Math.floor(histories.length / itemsPerPage)}
              onPageChange={(page) => setPage(page)}
              label={`${from + 1}-${to} of ${histories.length}`}
            />
          </DataTable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HistoryScreen;
