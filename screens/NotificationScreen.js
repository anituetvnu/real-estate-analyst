import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Notification = () => {
  return (
    <View>
      <Text>Notification Screen</Text>
    </View>
  );
};

const NotificationScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notification" component={Notification}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
