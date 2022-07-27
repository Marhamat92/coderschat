import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getStorageToken = async () => {
  const data = await AsyncStorage.getItem("user_token")
  return data;

}

export default axios.create({
  baseURL: "http://192.168.1.135:8000",

  headers: {
    Authorization: `Bearer ${getStorageToken()}`,
    'Content-Type': 'multipart/form-data'
  },
});


