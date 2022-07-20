import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./pages/Welcome/Welcome";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ChatRooms from "./pages/ChatRooms/ChatRooms";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Welcome"
          component={Welcome}

        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login" 
          component={Login} />
        <Stack.Screen 
        options={{
          headerShown: false,
        }}
        name="Register" 
        component={Register}/> 
         <Stack.Screen 
        
        options={{
        headerLeft: null,
        headerTitle: "Chat Rooms",
        headerTitleAlign: "center",
        headerTint:false,
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "bold",
          color: "#ff6f00",
          
        },

        headerStyle: {
          backgroundColor: "#fff",
        },
         
        }}
        name="ChatRooms" 
        component={ChatRooms}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
