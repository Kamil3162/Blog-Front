import axios from "axios";
import env from "../config/environment";


const axiosClientAPI = axios.create({
    // baseURL: env.apiUrl,
     baseURL: 'http://localhost:10000',
    timeout: 10000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})

export default axiosClientAPI;

