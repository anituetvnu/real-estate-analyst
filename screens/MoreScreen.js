import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();

const More = () => {
  return (
    <View>
      <Text>More Screen</Text>
    </View>
  );
};

const MoreScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="More" component={More}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({});
