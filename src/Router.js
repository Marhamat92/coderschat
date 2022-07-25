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
import ChatRoomInside from "./pages/ChatRoomInside/ChatRoomInside";
import { Ionicons } from '@expo/vector-icons';
import tw from "twrnc";
import useAuthStore from "./store/authStore";


export default function App() {
  const Stack = createStackNavigator();
  const isLoggin = useAuthStore (state => state.isLoggin);
   




  return (
    <NavigationContainer>
      <Stack.Navigator>
      {!isLoggin && 
      <>
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
          component={Login}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={Register}
        />
        </>}


        {isLoggin &&
        <>
        <Stack.Screen
          options={{
            headerLeft: null,
            headerTitle: "Chat Rooms",
            headerTitleAlign: "center",
            headerTint: false,
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
          component={ChatRooms}
        />
        <Stack.Screen
          options={{
            headerRight: () => (
              <View style={tw``}>
                <Ionicons name="exit-outline" size={24} color="#ff6f00" />
              </View>
            ),
            headerTintColor: "#ff6f00",
            headerTitleAlign: "center",
            headerTitleStyle: {
              
              fontSize: 16,
              fontWeight: "bold",
              color: "#ff6f00",
            },
          }}
          name="ChatRoomInside"
          component={ChatRoomInside}
        />
        </>}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
