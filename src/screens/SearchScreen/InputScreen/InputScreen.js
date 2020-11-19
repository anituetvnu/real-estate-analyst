import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import ModalList from "../../../components/ModalList/ModalList";
import { Direction, District, number } from "./data/data";
import { createStore } from "redux";

const Global_Results = [];
// let store = createStore(Global_Results);

const InputScreen = ({ navigation }) => {
  // Quận,  số phòng ngủ,  số toilet,  hướng nhà,  hướng ban công, chủ dự án, tên dự án, diện tích
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [houseDirection, setHouseDirection] = useState("");
  const [balconyDirection, setBalconyDirection] = useState("");
  const [acreage, setAcreage] = useState();
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [toilet, setToilet] = useState("");
  const [owner, setOwner] = useState("");
  const [name, setName] = useState("");
  const [modalListVisible, setModalListVisible] = useState(false);
  const [list, setList] = useState(Array.from(District));
  const [choose, setChoose] = useState("");

  const [disable, setDisable] = useState(true);
  const [opacity, setOpacity] = useState(0.5);
  const [blue, setBlue] = useState(1);

  const API_KEY = "da677dc0-d3a1-4087-8754-c374a029f5b4";

  const getResult = async () => {
    try {
      let _district;
      if (district[0] === "Q") _district = district.substr(5);
      if (district[0] === "H") _district = district.substr(6);
      if (district[0] === "T") _district = district.substr(7);

      // const response = await fetch(
      //   `https://api-real-estate-analyst.herokuapp.com/api-real-estate-analyst?apiKey=${API_KEY}&bedroom=${bedroom}&bathroom=${bathroom}&toilet=${toilet}&acreage=${acreage}&houseDirection=${houseDirection}&balconyDirection=${balconyDirection}`
      // );
      // const jsonData = await response.text();

      var result = {
        id: Global_Results.length,
        district: district,
        houseDirection: houseDirection,
        balconyDirection: balconyDirection,
        acreage: acreage,
        bedroom: bedroom,
        bathroom: bathroom,
        toilet: toilet,
        money: jsonData.content.money,
      };

      Global_Results.push(result);
      // console.log(jsonData);
      // navigation.navigate("GuessScreen", { result: result,  jsonData: jsonData });
      console.log(Global_Results);
      navigation.navigate("GuessScreen", { result: result });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (modalListVisible) {
      setBlue(0.2);
      console.log(1);
    } else {
      setBlue(1);
    }
  }, [modalListVisible]);

  useEffect(() => {
    if (
      district &&
      houseDirection &&
      balconyDirection &&
      bedroom &&
      bathroom &&
      toilet &&
      acreage
    ) {
      setDisable(false);
      setOpacity(1);
    } else {
      setDisable(true);
      setOpacity(0.5);
    }
  }, [
    district,
    houseDirection,
    balconyDirection,
    acreage,
    bedroom,
    bathroom,
    toilet,
  ]);

  return (
    <ImageBackground
      style={styles.background}
      source={require("./data/SearchBG.png")}
    >
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
          setBathroom={setBathroom}
          setToilet={setToilet}
          choose={choose}
        />
        <View>
          <Text style={styles.text}>ĐỊA ĐIỂM</Text>
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
        <View>
          <Text style={styles.text}>HƯỚNG NHÀ</Text>
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
        <View>
          <Text style={styles.text}>HƯỚNG BAN CÔNG</Text>
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

        {/* <View>
        <TouchableOpacity
          onPress={() => {
            setList(Array.from(subDistrict));
            setChoose("subDistrict");
            setModalListVisible(!modalListVisible);
          }}
        >
          <Text style={styles.selected}>{subDistrict}</Text>
        </TouchableOpacity>
      </View> */}

        <View>
          <Text style={styles.text}>DIỆN TÍCH</Text>
          <TextInput
            placeholder="m2"
            style={styles.inputAcreage}
            keyboardType="number-pad"
            onChangeText={(value) => setAcreage(value)}
          />
        </View>
        <View>
          <Text style={styles.text}>PHÒNG NGỦ</Text>
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

        <View>
          <Text style={styles.text}>PHÒNG TẮM</Text>
          <TouchableOpacity
            onPress={() => {
              setList(Array.from(number));
              setChoose("bathroom");
              setModalListVisible(!modalListVisible);
            }}
          >
            <Text style={styles.selected}>{bathroom}</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.text}>NHÀ VỆ SINH</Text>
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
        <TouchableOpacity
          disabled={disable}
          style={[styles.submitButton, { opacity: opacity }]}
          onPress={() => getResult()}
        >
          <Text style={styles.submitText}>DỰ ĐOÁN</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "red",
            fontStyle: "italic",
            marginLeft: 5,
            marginBottom: 5,
          }}
        >
          * Hãy điền đầy đủ thông tin
        </Text>
      </View>
    </ImageBackground>
  );
};

export default InputScreen;
export { Global_Results };
