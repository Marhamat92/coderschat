import axios from 'axios';
import api from '../services/api';
import qs from 'query-string';


export async function register_user(name, email, password) {
  const response = await api.post('/register', {
    "content": {
        "name_surname": name,
        "email": email,
        "password": password
      }
  }).catch(error => {
    console.log(error.message);
    console.log(error.response);
    console.log(error.request);
    console.log(error.response.data)
    }
    );
  return response.data;
} 

export async function login_user(email, password) {
    const res = await api.post("/login", qs.stringify({username:email, password:password}), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
     });
     api.defaults.headers.Authorization = `Bearer ${res.data.access_token}`;
     return res.data;
    
    }

export async function createRoom() {
    const response = await api.post('/room/create');
    return response.data;
    }

export async function getRoom(id) {
    const response = await api.get(`/room/get?room_id=${id}`);
    return response.data;
    }    

export async function getRooms(){
    const response = awa


}    
