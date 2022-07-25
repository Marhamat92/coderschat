import create from 'zustand'
import { persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';


const authStore = (set) => ({
  isLoggin: AsyncStorage.getItem('token') ? true : false,
  setIsLoggin: (value) => set(() => ({ isLoggin: value })),
})

const useAuthStore = create(authStore, { persist })

export default useAuthStore;





