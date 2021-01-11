import axios from 'axios';


const baseInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})


export default baseInstance;