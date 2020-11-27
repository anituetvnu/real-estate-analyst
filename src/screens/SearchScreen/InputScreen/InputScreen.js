import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import ModalList from "../../../components/ModalList/ModalList";
import { Direction, District, number, Furniture, law_doc } from "./data/data";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import addResult from "../../../actions/results";

const History = [];

const InputScreen = ({ navigation, route }) => {
  // Quận,  số phòng ngủ,  số toilet,  hướng nhà,  hướng ban công, chủ dự án, tên dự án, diện tích
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [houseDirection, setHouseDirection] = useState("");
  const [balconyDirection, setBalconyDirection] = useState("");
  const [acreage, setAcreage] = useState();
  const [bedroom, setBedroom] = useState("");
  const [toilet, setToilet] = useState("");
  const [furniture, setFurniture] = useState("");
  const [law, setLaw] = useState("");

  const [modalListVisible, setModalListVisible] = useState(false);
  const [list, setList] = useState(Array.from(District));
  const [choose, setChoose] = useState("");

  const [disable, setDisable] = useState(true);
  const [opacity, setOpacity] = useState(0.5);
  const [blue, setBlue] = useState(0.5);

  const [hideFur, setHideFur] = useState(0);
  const [hideLaw, setHideLaw] = useState(0);
  const [hideLoc, setHideLoc] = useState(0);

  const [loading, setLoading] = useState(false);

  const [formatMoney, setFormatMoney] = useState();

  // redux
  const dispatch = useDispatch();
  const results = useSelector((state) => state.results);
  const location = useSelector((state) => state.location);
  // console.log(" location", location);
  const API_KEY = "da677dc0-d3a1-4087-8754-c374a029f5b4";

  const getResult = async () => {
    try {
      setLoading(true);
      setBlue(0.2);
      let _district;
      if (district[0] === "Q") _district = district.substr(5);
      if (district[0] === "H") _district = district.substr(6);
      if (district[0] === "T") _district = district.substr(7);
      const response = await fetch(
        `http://18020105.pythonanywhere.com/api-real-estate-analyst?apiKey=${API_KEY}&district=${_district}&bedroom=${bedroom}&toilet=${toilet}&acreage=${acreage}&houseDirection=${houseDirection}&balconyDirection=${balconyDirection}&law=${law}&furniture=${furniture}&longitude=${location.longitude}&latitude=${location.latitude}`
      );
      console.log(
        `http://18020105.pythonanywhere.com/api-real-estate-analyst?apiKey=${API_KEY}&district=${_district}&bedroom=${bedroom}&toilet=${toilet}&acreage=${acreage}&houseDirection=${houseDirection}&balconyDirection=${balconyDirection}&law=${law}&furniture=${furniture}&longitude=${location.longitude}&latitude=${location.latitude}`
      );
      await response.text().then((response) => {
        console.log("response ", response);
        console.log("type :", typeof response);
        setFormatMoney(
          (JSON.parse(response).content.money / acreage).toFixed().toString() +
            ".000.000"
        );
      });
      setLoading(false);
      setBlue(1);

      const result = {
        id: History.length + 1,
        district: district,
        houseDirection: houseDirection,
        balconyDirection: balconyDirection,
        acreage: acreage,
        bedroom: bedroom,
        toilet: toilet,
        furniture: furniture,
        law: law,
        money: formatMoney,
      };
      // const action = addResult({});
      // dispatch(action);
      // console.log(results);
      // console.log(jsonData);
      History.push(result);
      console.log(History);
      // navigation.navigate("GuessScreen", {
      //   result: result,
      // });
      // console.log(results);
      // navigation.navigate("GuessScreen", { result: result });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  /*

  Waiting...
  
  */
  useEffect(() => {
    if (modalListVisible) {
      setBlue(0.2);
    } else {
      setBlue(1);
    }
  }, [modalListVisible]);
  useEffect(() => {
    if (furniture) {
      setHideFur(1);
    } else {
      setHideFur(0);
    }
  }, [furniture]);
  useEffect(() => {
    if (law) {
      setHideLaw(1);
    } else {
      setHideLaw(0);
    }
  }, [law]);
  useEffect(() => {
    if (location?.longitude || location?.longitude == 0) {
      setHideLoc(1);
    } else {
      setHideLoc(0);
    }
  }, [location?.longitude]);
  useEffect(() => {
    if (
      district &&
      houseDirection &&
      balconyDirection &&
      bedroom &&
      toilet &&
      acreage
    ) {
      setDisable(false);
      setOpacity(1);
    } else {
      setDisable(true);
      setOpacity(0.5);
    }
  }, [district, houseDirection, balconyDirection, acreage, bedroom, toilet]);

  return (
    <ImageBackground
      style={styles.background}
      source={require("./data/SearchBG.png")}
    >
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <View style={styles.loading}></View>
      )}
      <View style={[styles.container, { opacity: blue }]}>
        <ModalList
          visible={modalListVisible}
          list={list}
          setVisible={setModalListVisible}
          setDistrict={setDistrict}
          setSubDistrict={setSubDistrict}
          setHouseDirection={setHouseDirection}
          setBalconyDirection={setBalconyDirection}
          setBedroom={setBedroom}
          setToilet={setToilet}
          setFurniture={setFurniture}
          setLaw={setLaw}
          choose={choose}
        />
        <ScrollView>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.spaceLeft}>
              <Text style={styles.requiredText}>* ĐỊA ĐIỂM</Text>
              <TouchableOpacity
                onPress={() => {
                  setList(Array.from(District));
                  setChoose("district");
                  setModalListVisible(!modalListVisible);
                }}
              >
                <Text style={styles.selected}>{district}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceRight}>
              <Text style={styles.requiredText}>* DIỆN TÍCH</Text>
              <TextInput
                placeholder="m2"
                style={styles.inputAcreage}
                keyboardType="number-pad"
                onChangeText={(value) => setAcreage(value)}
              />
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.spaceLeft}>
              <Text style={styles.requiredText}>* HƯỚNG NHÀ</Text>
              <TouchableOpacity
                onPress={() => {
                  setList(Array.from(Direction));
                  setChoose("houseDirection");
                  setModalListVisible(!modalListVisible);
                }}
              >
                <Text style={styles.selected}>{houseDirection}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.spaceRight}>
              <Text style={styles.requiredText}>* HƯỚNG BAN CÔNG</Text>
              <TouchableOpacity
                onPress={() => {
                  setList(Array.from(Direction));
                  setChoose("balconyDirection");
                  setModalListVisible(!modalListVisible);
                }}
              >
                <Text style={styles.selected}>{balconyDirection}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.spaceLeft}>
              <Text style={styles.requiredText}>* PHÒNG NGỦ</Text>
              <TouchableOpacity
                onPress={() => {
                  setList(Array.from(number));
                  setChoose("bedroom");
                  setModalListVisible(!modalListVisible);
                }}
              >
                <Text style={styles.selected}>{bedroom}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.spaceRight}>
              <Text style={styles.requiredText}>* NHÀ VỆ SINH</Text>
              <TouchableOpacity
                onPress={() => {
                  setList(Array.from(number));
                  setChoose("toilet");
                  setModalListVisible(!modalListVisible);
                }}
              >
                <Text style={styles.selected}>{toilet}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              color: "red",
              fontStyle: "italic",
              fontSize: 15,
              marginBottom: 20,
            }}
          >
            * Thông tin bắt buộc
          </Text>

          {/* 

            // NO REQUIRED

        */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.spaceLeft}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>PHÁP LÝ</Text>
                <TouchableOpacity onPress={() => setLaw("")}>
                  <MaterialIcons
                    name="delete"
                    size={24}
                    color="blue"
                    style={{ opacity: hideLaw }}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setList(Array.from(law_doc));
                  setChoose("law");
                  setModalListVisible(!modalListVisible);
                }}
              >
                <Text style={styles.selected}>{law}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.spaceRight}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>NỘI THẤT</Text>
                <TouchableOpacity onPress={() => setFurniture("")}>
                  <MaterialIcons
                    name="delete"
                    size={24}
                    color="blue"
                    style={{ opacity: hideFur }}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setList(Array.from(Furniture));
                  setChoose("furniture");
                  setModalListVisible(!modalListVisible);
                }}
              >
                <Text style={styles.selected}>{furniture}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.text}>VỊ TRÍ</Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Map");
              }}
            >
              {location?.longitude ? (
                <Text style={styles.selected}>
                  {location?.longitude.toFixed(3)}
                  {"  "}
                  {location?.latitude.toFixed(3)}
                </Text>
              ) : (
                <Text style={styles.selected}></Text>
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            disabled={disable}
            style={[styles.submitButton, { opacity: opacity }]}
            onPress={() => getResult()}
          >
            <Text style={styles.submitText}>DỰ ĐOÁN</Text>
          </TouchableOpacity>
          <View>
            <Text>{formatMoney}</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default InputScreen;
export { History };
