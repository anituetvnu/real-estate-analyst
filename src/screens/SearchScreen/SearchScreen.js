import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InputScreen from "./InputScreen/InputScreen";
import GuessScreen from "./GuessScreen/GuessScreen";

const Stack = createStackNavigator();

const SearchScreen = () => {
  return (
    <Stack.Navigator initialRouteName="InputScreen">
      <Stack.Screen
        options={{ headerShown: false }}
        name="InputScreen"
        component={InputScreen}
      />
      <Stack.Screen name="GuessScreen" component={GuessScreen} />
    </Stack.Navigator>
  );
};

export default SearchScreen;
