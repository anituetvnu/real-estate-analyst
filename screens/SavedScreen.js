import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Saved = () => {
  return (
    <View>
      <Text>Saved Screen</Text>
    </View>
  );
};

const SavedScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Saved" component={Saved}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({});
