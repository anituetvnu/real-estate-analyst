import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import styles from "./styles";
import ModalList from "../../../components/ModalList/ModalList";
import { Direction, District, number, Furniture, law_doc } from "./data/data";
import { useDispatch, useSelector } from "react-redux";
import addResult from "../../../actions/results";

const History = [];

const InputScreen = ({ navigation }) => {
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
  const [owner, setOwner] = useState("");
  const [name, setName] = useState("");

  const [modalListVisible, setModalListVisible] = useState(false);
  const [list, setList] = useState(Array.from(District));
  const [choose, setChoose] = useState("");

  const [disable, setDisable] = useState(true);
  const [opacity, setOpacity] = useState(0.5);
  const [blue, setBlue] = useState(1);

  // redux
  const dispatch = useDispatch();
  const results = useSelector((state) => state.results);

  const API_KEY = "da677dc0-d3a1-4087-8754-c374a029f5b4";

  const getResult = async () => {
    try {
      let _district;
      if (district[0] === "Q") _district = district.substr(5);
      if (district[0] === "H") _district = district.substr(6);
      if (district[0] === "T") _district = district.substr(7);
      const response = await fetch(
        `http://18020105.pythonanywhere.com/api-real-estate-analyst?apiKey=${API_KEY}&district=${district}&bedroom=${bedroom}&toilet=${toilet}&acreage=${acreage}&houseDirection=${houseDirection}&balconyDirection=${balconyDirection}`
      );
      const jsonData = await response.text();
      const formatMoney =
        JSON.parse(jsonData).content.money.toFixed().toString() + ".000.000";

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
      navigation.navigate("GuessScreen", {
        result: result,
      });
      // console.log(results);
      console.log(jsonData);
      // navigation.navigate("GuessScreen", { result: result });
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    if (modalListVisible) {
      setBlue(0.2);
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
            style={{ flexDirection: "row", justifyContent: "space-between" }}
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

          <View>
            <Text style={styles.text}>PHÁP LÝ</Text>
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

          <View>
            <Text style={styles.text}>NỘI THẤT</Text>
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

          <View>
            <Text style={styles.text}>VỊ TRÍ</Text>
            <TouchableOpacity>
              <Text style={styles.selected}>{toilet}</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "red",
              fontStyle: "italic",
              fontSize: 15,
              marginTop: 20,
            }}
          >
            * Thông tin bắt buộc
          </Text>
          <TouchableOpacity
            disabled={disable}
            style={[styles.submitButton, { opacity: opacity }]}
            onPress={() => getResult()}
          >
            <Text style={styles.submitText}>DỰ ĐOÁN</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default InputScreen;
export { History };
