import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

var axiosCreate = {
  baseURL: "http://192.168.1.135:8000",
};

if (AsyncStorage.getItem("__mp_tk"))
  axiosCreate["headers"] = {
    Authorization: `Bearer ${AsyncStorage.getItem("__mp_tk")??"_"}`,
  };
export default axios.create(axiosCreate);
