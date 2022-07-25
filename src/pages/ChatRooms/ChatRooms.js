import React, { useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import { getRooms, createRoom,getRoom } from "../../services/allServices";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import ModalInput from "../../components/Input/ModalInput";
import { useForm, Controller } from "react-hook-form";
import { FontAwesome } from '@expo/vector-icons'; 

function Rooms({navigation,route}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      room_name: "",
      room_color: "",
    },
  });
 
  

  const [rooms, setRooms] = React.useState([]);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const onSubmit = (data) => {
   
    createRoom(data.room_name, data.room_color)
      .then((res) => {
        console.log(res);
       onGetRooms();
        setIsModalVisible(false);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onGetRooms = () => {
    getRooms()
      .then((res) => {
        setRooms(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    onGetRooms();
  }, []);

  const roomList = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ChatRoomInside", { id: item.id });
      }
      }
      style={tw`bg-${item.content?.room_color}-500  h-40 w-1/2 rounded-md  items-center justify-center border border-gray-300`}
    >
      <Text style={tw`text-black text-3xl font-bold`}>
        {item.content?.room_name}
      </Text>
    </TouchableOpacity>
  );

  

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={tw`absolute h-full`}>
      <FlatList
        columnWrapperStyle={tw`px-2 flex  `}
        numColumns={2}
        data={rooms}
        renderItem={roomList}
      />
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={tw`  bottom-10 right-2 items-end`}
      >
        <Ionicons name="add-circle" size={75} color="#ff6f00" />
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={tw`h-35 py-3 w-full bg-white rounded-md `}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <ModalInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Please enter room name..."
                inputStyle={tw`rounded-md mx-2 mt-2 pl-2 border border-[#ff6f00]`}
              />
            )}
            name="room_name"
          />
          {errors.room_name && <Text>Please enter room name!</Text>}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <ModalInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Please enter room color..."
                inputStyle={tw`rounded-md mx-2 mt-2 pl-2 border border-[#ff6f00]`}
              />
            )}
            name="room_color"
          />
          {errors.room_color && <Text>Please enter room color!</Text>}
          <View style={tw`flex-row justify-center items-center mt-3`}>
            <Button
              titleStyle={tw`text-white font-bold`}
              buttonStyle={tw`w-30 items-center rounded-md bg-red-500 px-3 py-1`}
              title="Close"
              onPress={toggleModal}
            />
            <Button
              titleStyle={tw`text-white font-bold`}
              buttonStyle={tw`ml-2 w-30 items-center rounded-md bg-green-500 px-3 py-1`}
              title="Add Room"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Rooms;
