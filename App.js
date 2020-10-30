import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import { MapScreen, SearchScreen, ResultScreen } from "./src/screens";

const Tab = createBottomTabNavigator();
const results = [];

const routeIcons = {
  Map: "map-pin",
  Search: "search",
  Result: "clipboard",
};

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Feather
              name={routeIcons[route.name]}
              size={24}
              color={focused ? "orange" : "grey"}
            />
          ),
        })}
        tabBarOptions={{
          activeTintColor: "orange",
          inactiveTintColor: "grey",
        }}
        initialRouteName="Search"
      >
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Result" component={ResultScreen} />
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
