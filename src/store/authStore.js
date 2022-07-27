import create from 'zustand'
import { persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';


const authStore =  (set) => ({
  isLoggin: AsyncStorage.getItem("isLogin")?true:false,
  setIsLoggin: async (value) => {
    await AsyncStorage.setItem("isLogin",value)
    set(() => ({ isLoggin: value }))
  }
})

const useAuthStore = create(authStore, { persist })

export default useAuthStore;





