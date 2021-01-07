import axios from 'axios';

const baseInstance = axios.create({
    baseURL: "https://smash-app-backend.herokuapp.com/api"
})

export default baseInstance;