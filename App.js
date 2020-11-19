import React from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { MapScreen, SearchScreen, ResultScreen } from "./src/screens";
// import { Provider } from "react-redux";
// import store from "./src/store";

const Tab = createBottomTabNavigator();

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

    // <Provider store={store}>
    //   <NavigationContainer style={styles.container}>
    //     <Tab.Navigator
    //       screenOptions={({ route }) => ({
    //         tabBarIcon: ({ focused }) => (
    //           <Feather
    //             name={routeIcons[route.name]}
    //             size={24}
    //             color={focused ? "blue" : "grey"}
    //           />
    //         ),
    //       })}
    //       tabBarOptions={{
    //         activeTintColor: "blue",
    //         inactiveTintColor: "grey",
    //       }}
    //     >
    //       <Tab.Screen name="Map" component={MapScreen} />
    //       <Tab.Screen name="Search" component={SearchScreen} />
    //       <Tab.Screen name="Result" component={ResultScreen} />
    //     </Tab.Navigator>
    //   </NavigationContainer>
    // </Provider>
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
