import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Attention = () => {
  return (
    <View>
      <Text>Attention Screen</Text>
    </View>
  );
};

const AttentionScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Attention" component={Attention}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AttentionScreen;

const styles = StyleSheet.create({});
