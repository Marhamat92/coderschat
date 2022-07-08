import React from 'react'
import { SafeAreaView, Text, View,TextInput } from 'react-native'

function Input({placeholder,onChangeText,value,textareaStyle,inputStyle}) {

  return (
   <View style={inputStyle} >
    <TextInput
    placeholder={placeholder}
    onChangeText={onChangeText}
    value={value}
    style={textareaStyle}
    />
   </View>
  )
}

export default Input