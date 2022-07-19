import React from 'react'
import { SafeAreaView, Text, View,TextInput,Icon } from 'react-native'
import tw from "twrnc";



function Input({placeholder,onChangeText,value,textareaStyle,inputStyle,secureTextEntry,icon}) {

  return (
   <View style={inputStyle} >
    <TextInput
    secureTextEntry={secureTextEntry}
    placeholderTextColor="#fff"
    placeholder={placeholder}
    onChangeText={onChangeText}
    value={value}
    style={textareaStyle}
    />
   {icon && icon}
   </View>
  )
}

export default Input