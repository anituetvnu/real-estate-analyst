import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get("window").width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginHorizontal: 18,
    },
    header: {
        flexDirection: "row",
    },
    backButton: {
        fontSize: 24,
        color: "black",
        padding: 10,
        paddingLeft: 0,
    },
    title: {
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
        fontSize: 20,
    },
    arrowContainer: {
        height: WINDOW_WIDTH,
        alignSelf: "center",
    },
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    arrow: {
        width: WINDOW_WIDTH / 3,
        height: WINDOW_WIDTH / 3,
        // transform: [{ rotate: '90deg' }],
    }
});

export default styles;
