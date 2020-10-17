import { StyleSheet, Dimensions } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    locateButton: {
        fontSize: 26,
        color: "blue",
        backgroundColor: "white",
        padding: 7,
        borderRadius: 10,
    }
})

export default styles;
