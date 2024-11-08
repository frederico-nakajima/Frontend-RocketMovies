import axios from "axios";


export const api = axios.create({
    baseURL:"https://rocketmovies-backend-3.onrender.com"
})