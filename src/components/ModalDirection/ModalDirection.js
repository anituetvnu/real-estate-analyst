import React, { useState, useEffect } from 'react'
import { View, Text, Modal, TouchableOpacity, FlatList, Image } from 'react-native'
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const arrow = require("../../../assets/arrow.png")

const ModalDirection = (props) => {
    const [choose, setChoose] = useState(0);
    const [direct, setDirect] = useState("");
    useEffect(() => {
        console.log(choose);
        switch (choose) {
            case 1:
                setDirect("Tây Bắc")
                break;
            case 2:
                setDirect("Bắc")
                break;
            case 3:
                setDirect("Đông Bắc")
                break;
            case 4:
                setDirect("Tây")
                break;
            case 6:
                setDirect("Đông")
                break;
            case 7:
                setDirect("Tây Nam")
                break;
            case 8:
                setDirect("Nam")
                break;
            case 9:
                setDirect("Đông Nam")
                break;
            default:
                break;
        }
    }, [choose])

    return (
        <Modal
            visible={props.visible}
            transparent={false}
            animationType="fade"
            propagateSwipe={true}
            statusBarTranslucent={false}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => props.setVisible(false)}>
                        <Ionicons name="ios-arrow-back" style={styles.backButton} />
                    </TouchableOpacity>
                    <Text style={styles.title}>CHỌN</Text>
                </View>
                <Text>{direct}</Text>
                <View style={styles.arrowContainer}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => setChoose(1)}>
                            <Image
                                source={arrow}
                                style={[styles.arrow, { transform: [{ rotate: '-135deg' }] }]}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setChoose(2)}>
                            <Image
                                source={arrow}
                                style={[styles.arrow, { transform: [{ rotate: '-90deg' }] }]}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setChoose(3)}>
                            <Image
                                source={arrow}
                                style={[styles.arrow, { transform: [{ rotate: '-45deg' }] }]}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => setChoose(4)}>
                            <Image
                                source={arrow}
                                style={[styles.arrow, { transform: [{ rotate: '-180deg' }] }]}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setChoose(6)}>
                            <Image
                                source={arrow}
                                style={[styles.arrow, { transform: [{ rotate: '0deg' }] }]}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => setChoose(7)}>
                            <Image
                                source={arrow}
                                style={[styles.arrow, { transform: [{ rotate: '135deg' }] }]}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setChoose(8)}>
                            <Image
                                source={arrow}
                                style={[styles.arrow, { transform: [{ rotate: '90deg' }] }]}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setChoose(9)}>
                            <Image
                                source={arrow}
                                style={[styles.arrow, { transform: [{ rotate: '45deg' }] }]}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalDirection
