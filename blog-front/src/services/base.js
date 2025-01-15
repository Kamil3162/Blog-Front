import axios from "axios";
import env from "../config/environment";


const axiosClientAPI = axios.create({
    // baseURL: env.apiUrl,
//    baseURL: env.apiUrl,
    baseURL: 'https://kamilholub.pl/api',
    timeout: 10000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})

export default axiosClientAPI;

