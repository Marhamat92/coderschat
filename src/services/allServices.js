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
  })
  return response.data;
} 

export async function login_user(email, password) {
    const res = await api.post("/login", qs.stringify({username:email, password:password}), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
     });
     console.log(res.data.access_token);
     api.defaults.headers.Authorization = `Bearer ${res.data.access_token}`;
     return res.data;
    
    }

export async function createRoom(name, color) {
    const response = await api.post('/room/create', {content:{'room_name':name, 'room_color':color}});
    return response.data;
    }

export async function getRoom(id) {
    const response = await api.get(`/room/get?room_id=${id}`);
    return response.data;
    }    

export async function getRooms(navigation){
    await login_user("bnjkb", "bnjkb")
    const response = await api.get('room/get/list')
    return response.data;
     
}    
