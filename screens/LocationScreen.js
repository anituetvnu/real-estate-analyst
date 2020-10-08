import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Location = () => {
  return (
    <View>
      <Text>Location Screen</Text>
    </View>
  );
};

const LocationScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Location" component={Location}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({});
