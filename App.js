import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import LocationScreen from "./screens/LocationScreen";
import NotificationScreen from "./screens/NotificationScreen";
import AttentionScreen from "./screens/AttentionScreen";
import SavedScreen from "./screens/SavedScreen";
import MoreScreen from "./screens/MoreScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const routeIcons = {
  Location: "find",
  Notification: "bells",
  Attention: "exclamationcircleo",
  Saved: "staro",
  More: "ellipsis1",
};

export default function App() {
  return (
    <NavigationContainer independent="Location">
      <Tab.Navigator
        initialRouteName="Location"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={routeIcons[route.name]}
              size={30}
              color={focused ? "orange" : "grey"}
            />
          ),
        })}
        tabBarOptions={{
          activeTintColor: "orange",
          inactiveTintColor: "grey",
        }}
      >
        <Tab.Screen name="Location" component={LocationScreen}></Tab.Screen>
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
        ></Tab.Screen>
        <Tab.Screen name="Attention" component={AttentionScreen}></Tab.Screen>
        <Tab.Screen name="Saved" component={SavedScreen}></Tab.Screen>
        <Tab.Screen name="More" component={MoreScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
