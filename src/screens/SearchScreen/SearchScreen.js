import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import ModalList from "../../components/ModalList/ModalList";

// import ModalDirection from "../../components/ModalDirection/ModalDirection";

const District = [
  {
    name: "Quận Ba Đình",
    id: 0,
  },
  {
    name: "Quận Hoàn Kiếm",
    id: 1,
  },
  {
    name: "Quận Tây Hồ",
    id: 2,
  },
  {
    name: "Quận Long Biên",
    id: 3,
  },
  {
    name: "Quận Cầu Giấy",
    id: 4,
  },
  {
    name: "Quận Đống Đa",
    id: 5,
  },
  {
    name: "Quận Hai Bà Trưng",
    id: 6,
  },
  {
    name: "Quận Hoàng Mai",
    id: 7,
  },
  {
    name: "Quận Thanh Xuân",
    id: 8,
  },
  {
    name: "Huyện Sóc Sơn",
    id: 9,
  },
  {
    name: "Huyện Đông Anh",
    id: 10,
  },
  {
    name: "Huyện Gia Lâm",
    id: 11,
  },
  {
    name: "Quận Nam Từ Liêm",
    id: 12,
  },
  {
    name: "Huyện Thanh Trì",
    id: 13,
  },
  {
    name: "Quận Bắc Từ Liêm",
    id: 14,
  },
  {
    name: "Huyện Mê Linh",
    id: 15,
  },
  {
    name: "Quận Hà Đông",
    id: 16,
  },
  {
    name: "Thị xã Sơn Tây",
    id: 17,
  },
  {
    name: "Huyện Ba Vì",
    id: 18,
  },
  {
    name: "Huyện Phúc Thọ",
    id: 19,
  },
  {
    name: "Huyện Đan Phượng",
    id: 20,
  },
  {
    name: "Huyện Hoài Đức",
    id: 21,
  },
  {
    name: "Huyện Quốc Oai",
    id: 22,
  },
  {
    name: "Huyện Thạch Thất",
    id: 23,
  },
  {
    name: "Huyện Chương Mỹ",
    id: 24,
  },
  {
    name: "Huyện Thanh Oai",
    id: 25,
  },
  {
    name: "Huyện Thường Tín",
    id: 26,
  },
  {
    name: "Huyện Phú Xuyên",
    id: 27,
  },
  {
    name: "Huyện Ứng Hòa",
    id: 28,
  },
  {
    name: "Huyện Mỹ Đức",
    id: 29,
  },
];
const Direction = [
  {
    name: "Tây Bắc",
    id: 1,
  },
  {
    name: "Bắc",
    id: 2,
  },
  {
    name: "Đông Bắc",
    id: 3,
  },
  {
    name: "Tây",
    id: 4,
  },
  {
    name: "Đông",
    id: 6,
  },
  {
    name: "Tây Nam",
    id: 7,
  },
  {
    name: "Nam",
    id: 8,
  },
  {
    name: "Đông Nam",
    id: 9,
  },
];
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

const SearchScreen = ({ navigation }) => {
  // Quận,  số phòng ngủ,  số toilet,  hướng nhà,  hướng ban công, chủ dự án, tên dự án, diện tích
  const [district, setDistrict] = useState("Quận/Huyện");
  // const [options, setOptions] = useState({
  //   district: "",
  //   bedroom: 0,
  //   toilet: 0,
  //   house_direction: "",
  //   balcony_direction: "",
  //   owner: "",
  //   name: "",
  //   acreage: 0,
  // })
  const [subDistrict, setSubDistrict] = useState("Phường/Xã");
  const [houseDirection, setHouseDirection] = useState("Đông/Tây/Nam/Bắc");
  const [balconyDirection, setBalconyDirection] = useState("Đông/Tây/Nam/Bắc");
  const [bedroom, setBedroom] = useState(1);
  const [bathroom, setBathroom] = useState(1);
  const [toilet, setToilet] = useState(1);
  const [acreage, setAcreage] = useState(0);
  const [owner, setOwner] = useState("");
  const [name, setName] = useState("");
  const [modalListVisible, setModalListVisible] = useState(false);
  const [modalDirectionVisible, setModalDirectionVisible] = useState(false);
  const [list, setList] = useState(Array.from(District));
  const [choose, setChoose] = useState("");
  const API_KEY = "da677dc0-d3a1-4087-8754-c374a029f5b4";
  getResult = async () => {
    // await fetch(`https://api-real-estate-analyst.herokuapp.com/?apiKey=${API_KEY}&bedroom=${bedroom}&bathroom=${bathroom}&toilet=${toilet}&acreage=${acreage}&houseDirection=${houseDirection}&balconyDirection=${balconyDirection}`)
    // await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe`)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     return json.content;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    try {
      const response = await fetch(
        `https://api-real-estate-analyst.herokuapp.com/api-real-estate-analyst?apiKey=${API_KEY}&bedroom=${bedroom}&bathroom=${bathroom}&toilet=${toilet}&acreage=${acreage}&houseDirection=${houseDirection}&balconyDirection=${balconyDirection}`
      );
      const jsonData = await response.text();
      navigation.navigate("Result", { jsonData: jsonData });
    } catch (error) {
      console.log(error);
    }
    // const jsonData = await response.json();
    // return console.log(response);
  };
  return (
    <View style={styles.container}>
      {/* <ModalDirection
        visible={modalDirectionVisible}
        list={direction}
        setVisible={setModalDirectionVisible}
        choose={choose}
      /> */}
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
        // setOptions={setOptions}
        choose={choose}
        // options={options}
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
            setModalListVisible(!modalDirectionVisible);
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
            setModalListVisible(!modalDirectionVisible);
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
      <TouchableOpacity style={styles.submitButton} onPress={getResult}>
        <Text style={styles.submitText}>DỰ ĐOÁN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;
