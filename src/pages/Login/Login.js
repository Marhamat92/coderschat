import React from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import tw from "twrnc";
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';



function Login({navigation}) {




  return (
   <SafeAreaView style={tw`bg-[#ff6f00] h-full`}>
   <View style={tw`flex items-center mt-40`}>
   <Text style={tw`text-[#0a065c] text-4xl font-bold `}>CodersChat</Text>
   </View>
   <View style={tw`mt-40 bg-transparent`}>
      <Input 
      textareaStyle={tw` text-white text-md font-normal  pl-2  `} 
      inputStyle={tw` border-r-transparent border-t-transparent border-l-transparent   border-b-white border mx-2 py-2`}  
      placeholder="Enter your email..."
      />
      <Input 
      
      textareaStyle={tw` text-white text-md font-normal  pl-2  `} 
      inputStyle={tw`border-r-transparent border-t-transparent border-l-transparent   border border-b-white mx-2 mt-2 py-2`}  
      placeholder="Enter your password..."
      />
      <View style={tw`flex-col  justify-center mt-3`}>
      <Button 
      titleStyle={tw` text-white font-bold text-xl text-center`} 
      buttonStyle={tw` py-1 bg-[#FFA040]  rounded-md mx-2`} title="Login"/>
      
      <Button 
      onPress={() => navigation.navigate("Register")}
      titleStyle={tw`text-[#FFA040] font-bold text-xl text-center`} 
      buttonStyle={tw` py-1 bg-white  rounded-md mx-2 mt-2`} title="Register"/>
      </View>
     
   </View>
   </SafeAreaView>

  )
}

export default Login


 
 