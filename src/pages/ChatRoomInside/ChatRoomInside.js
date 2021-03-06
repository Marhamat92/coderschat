import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Modal, Button, TextInput, Alert } from 'react-native'
import { getRoom} from '../../services/allServices';
import tw from "twrnc";
// import useWebSocket, { ReadyState } from 'react-use-websocket';

function ChatRoomInside({navigation,route}) {
  const [roomTitle, setRoomTitle] = React.useState('');
   


  // const [socketUrl] = useState('ws://localhost:8000/room/info/');
  // const [messageHistory, setMessageHistory] = useState([]);
  // const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  // useEffect(() => {
  //   if (lastMessage !== null) {
  //     setMessageHistory((prev) => prev.concat(lastMessage));
  //   }
  // }, [lastMessage, setMessageHistory]);


  const {id} = route.params;

  const onGetRoom = () => {
      getRoom(id)
          .then((res) => {
          setRoomTitle(res.content?.room_name);
          navigation.setOptions({
              title: res.content?.room_name,
          });
          })
          .catch((err) => {
          console.log(err);
          }
          );
  }

  useEffect(() => {
      onGetRoom();
  }
  , [])

  return (
    <View style={tw`bg-[#ff6f00] h-full flex items-center px-2`} >
        <View style={tw`  flex w-3/3  items-center border border-dotted border-white mx-2 mt-3 rounded-md py-2 `}>
        <Text style={tw`text-white font-bold text-lg`}>{roomTitle} room was created!</Text>
        </View>
    </View>
  )
}

export default ChatRoomInside