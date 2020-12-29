import axios from 'axios';

const instance = axios.create({
    baseURL: "https://smash-app-backend.herokuapp.com/api"
})

export default instance;