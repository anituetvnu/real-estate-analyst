import React from 'react'
import { View, Text } from 'react-native'
import styles from "./styles";

const ResultScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            {/* console.log(route.params?.jsonData) */}
            {
                console.log(typeof route.params?.jsonData)
            }
            <Text>{JSON.parse(route.params?.jsonData).content.money}</Text>
        </View>
    )
}

export default ResultScreen