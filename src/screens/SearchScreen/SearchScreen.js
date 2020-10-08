import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Picker } from "react-native";
import styles from "./styles";
import ModalList from "../../components/ModalList/ModalList";

const District = [
  "Quận Ba Đình",
  "Quận Hoàn Kiếm",
  "Quận Tây Hồ",
  "Quận Long Biên",
  "Quận Cầu Giấy",
  "Quận Đống Đa",
  "Quận Hai Bà Trưng",
  "Quận Hoàng Mai",
  "Quận Thanh Xuân",
  "Huyện Sóc Sơn",
  "Huyện Đông Anh",
  "Huyện Gia Lâm",
  "Quận Nam Từ Liêm",
  "Huyện Thanh Trì",
  "Quận Bắc Từ Liêm",
  "Huyện Mê Linh",
  "Quận Hà Đông",
  "Thị xã Sơn Tây",
  "Huyện Ba Vì",
  "Huyện Phúc Thọ",
  "Huyện Đan Phượng",
  "Huyện Hoài Đức",
  "Huyện Quốc Oai",
  "Huyện Thạch Thất",
  "Huyện Chương Mỹ",
  "Huyện Thanh Oai",
  "Huyện Thường Tín",
  "Huyện Phú Xuyên",
  "Huyện Ứng Hòa",
  "Huyện Mỹ Đức",
];

const subDistrict = {};
const number = [1, 2, 3, 4, 5];

const SearchScreen = () => {
  const [district, setDistrict] = useState("Quận/Huyện");
  const [bedroom, setBedroom] = useState(1);
  const [bathroom, setBathroom] = useState(1);
  const [toilet, setToilet] = useState(1);
  const [acreage, setAcreage] = useState(0);
  const [modalListVisible, setModalListVisible] = useState(false);
  const [list, setList] = useState(Array.from(District));
  const [choose, setChoose] = useState("district");
  return (
    <View style={styles.container}>
      <ModalList
        visible={modalListVisible}
        list={list}
        setVisible={setModalListVisible}
        setDistrict={setDistrict}
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
        <Text style={styles.text}>DIỆN TÍCH</Text>
        <TextInput
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
    </View>
  );
};

export default SearchScreen;
