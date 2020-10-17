import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Picker } from "react-native";
import styles from "./styles";
import ModalList from "../../components/ModalList/ModalList";

const District = [
  {
    name: 'Quận Ba Đình',
    id: 0
  },
  {
    name: 'Quận Hoàn Kiếm',
    id: 1
  },
  {
    name: 'Quận Tây Hồ',
    id: 2
  },
  {
    name: 'Quận Long Biên',
    id: 3
  },
  {
    name: 'Quận Cầu Giấy',
    id: 4
  },
  {
    name: 'Quận Đống Đa',
    id: 5
  },
  {
    name: 'Quận Hai Bà Trưng',
    id: 6
  },
  {
    name: 'Quận Hoàng Mai',
    id: 7
  },
  {
    name: 'Quận Thanh Xuân',
    id: 8
  },
  {
    name: 'Huyện Sóc Sơn',
    id: 9
  },
  {
    name: 'Huyện Đông Anh',
    id: 10
  },
  {
    name: 'Huyện Gia Lâm',
    id: 11
  },
  {
    name: 'Quận Nam Từ Liêm',
    id: 12
  },
  {
    name: 'Huyện Thanh Trì',
    id: 13
  },
  {
    name: 'Quận Bắc Từ Liêm',
    id: 14
  },
  {
    name: 'Huyện Mê Linh',
    id: 15
  },
  {
    name: 'Quận Hà Đông',
    id: 16
  },
  {
    name: 'Thị xã Sơn Tây',
    id: 17
  },
  {
    name: 'Huyện Ba Vì',
    id: 18
  },
  {
    name: 'Huyện Phúc Thọ',
    id: 19
  },
  {
    name: 'Huyện Đan Phượng',
    id: 20
  },
  {
    name: 'Huyện Hoài Đức',
    id: 21
  },
  {
    name: 'Huyện Quốc Oai',
    id: 22
  },
  {
    name: 'Huyện Thạch Thất',
    id: 23
  },
  {
    name: 'Huyện Chương Mỹ',
    id: 24
  },
  {
    name: 'Huyện Thanh Oai',
    id: 25
  },
  {
    name: 'Huyện Thường Tín',
    id: 26
  },
  {
    name: 'Huyện Phú Xuyên',
    id: 27
  },
  {
    name: 'Huyện Ứng Hòa',
    id: 28
  },
  {
    name: 'Huyện Mỹ Đức',
    id: 29
  },]
const subDistrict = {};
const number = [
  {
    name: 1,
    id: 1,
  },
  {
    name: 2,
    id: 2,
  },
  {
    name: 3,
    id: 3,
  },
  {
    name: 4,
    id: 4,
  },
  {
    name: 5,
    id: 5,
  },
];

const SearchScreen = () => {
  const [district, setDistrict] = useState("Quận/Huyện");
  const [subDistrict, setSubDistrict] = useState("Phường/Xã");
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
        setSubDistrict={setSubDistrict}
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
        {/* <TouchableOpacity
          onPress={() => {
            setList(Array.from(subDistrict));
            setChoose("subDistrict");
            setModalListVisible(!modalListVisible);
          }}
        >
          <Text style={styles.selected}>{subDistrict}</Text>
        </TouchableOpacity> */}
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
