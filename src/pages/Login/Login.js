import React from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import tw from "twrnc";
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';


function Login() {
  return (
   <SafeAreaView style={tw`bg-[#ff6f00] h-full`}>
   <View style={tw`flex items-center mt-20`}>
   <Text style={tw`text-[#0a065c] text-4xl font-bold `}>CodersChat</Text>
   </View>
   <View style={tw`mt-40 bg-transparent`}>
      <Input 
      textareaStyle={tw`text-white text-lg font-bold  pl-2  border-r-transparent border-t-transparent border-l-transparent   border border-b-white mx-2 py-2`} 
      inputStyle={tw` `}  
      placeholder="Enter your email..."
      />
      <Input 
      textareaStyle={tw`text-white text-lg font-bold border-r-transparent border-t-transparent border-l-transparent   border border-b-white pl-2  mx-2 mt-1 py-2`} 
      inputStyle={tw` `}  
      placeholder="Enter your password..."
      />
      <View style={tw`flex-row   justify-center mt-3`}>
      <Button 
      titleStyle={tw` text-white font-bold text-xl text-center`} 
      buttonStyle={tw`w-30 py-1 bg-[#FFA040]  rounded-md `} title="Login"/>
      
      <Button 
      titleStyle={tw`text-[#FFA040] font-bold text-xl text-center`} 
      buttonStyle={tw`w-30 py-1 bg-white  rounded-md ml-2`} title="Register"/>
      </View>
     
   </View>
   </SafeAreaView>

  )
}

export default Login

 