import React from "react";
import DetailScreen from "./DetailScreen/DetailScreen";
import HistoryScreen from "./HistoryScreen/HistoryScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const ResultScreen = () => {
  return (
    <Stack.Navigator initialRouteName="HistoryScreen">
      <Stack.Screen
        options={{ headerShown: false }}
        name="HistoryScreen"
        component={HistoryScreen}
      />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default ResultScreen;
