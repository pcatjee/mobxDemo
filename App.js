import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AddProductForm" component={AddProductForm} />
        <Stack.Screen name="ProductList" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
