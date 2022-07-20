import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

var axiosCreate = {
  baseURL: "http://0.0.0.0:8000",
};
if (AsyncStorage.getItem("__mp_tk"))
  axiosCreate["headers"] = {
    Authorization: `Bearer ${AsyncStorage.getItem("__mp_tk")}`,
  };
export default axios.create(axiosCreate);
