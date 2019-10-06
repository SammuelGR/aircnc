import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.18:3333', // can change
});

export default api;
