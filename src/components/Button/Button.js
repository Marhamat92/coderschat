import React from 'react'
import { TouchableOpacity,View,Text } from 'react-native'

function Button({onPress,title,buttonStyle,titleStyle}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={buttonStyle}>
        <Text style={titleStyle} >{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Button