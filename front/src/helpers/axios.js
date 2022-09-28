import axios from "axios";

let token = localStorage.getItem('token')

const client = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Authorization': `Bearer ${token}` 
      }
})

export default client;