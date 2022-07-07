import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import tw from "twrnc";
import { globalStyles } from "../../styles/global";
import { image } from "../../assets/images/beginimage.png";
import Button from "../../components/Button/Button";

function Welcome({ navigation }) {
  return (
    <SafeAreaView>
      <ImageBackground
        source={{ uri: "../../assets/images/beginimage.png" }}
        resizeMode="cover"
        style={tw`h-full w-full flex items-center justify-center bg-[#ff6f00]`}
      >
        <Text style={tw`text-[#0a065c] text-5xl font-bold`}>CodersChat</Text>
        <Button
          onPress={() => navigation.navigate("Register")}
          titleStyle={tw`text-[#0a065c] font-bold text-lg`}
          buttonStyle={tw`bg-white py-2 px-2 rounded-md mt-2`}
          title="Get Started"
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Welcome;
