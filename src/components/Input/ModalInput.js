import React from 'react'
import { SafeAreaView, Text, View,TextInput,Icon } from 'react-native'
import tw from "twrnc";



function ModalInput({placeholder,onChangeText,value,textareaStyle,inputStyle,secureTextEntry,icon,label}) {

  return (
   <View style={inputStyle} >
    <TextInput
    label={label}
    secureTextEntry={secureTextEntry}
    placeholderTextColor="gray"
    placeholder={placeholder}
    onChangeText={onChangeText}
    value={value}
    style={textareaStyle}
    />
   {icon && icon}
   </View>
  )
}

export default ModalInput