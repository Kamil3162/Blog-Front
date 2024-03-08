import axios from "axios";
import jwt, {jwtDecode} from "jwt-decode";
import Cookies from "universal-cookie";


const API_URL = "http://127.0.0.1:10000"

const cookies = new Cookies();


export const postCreate = (title, option, content, photo) => {
    const post_data = {
        title: title,
        content: content,
        photo_url: photo,
        owner_id: cookies.get('user_data')['id']
    }
    axios.post(API_URL + '/post-create/', {
        withCredentials: true,
        headers: {
            // Inform the server about the form-data content type
            // This line might be optional as browsers usually set the correct content type for FormData,
            // including the boundary parameter.
            'Content-Type': 'application/json'
        },
    }).then(response =>{
        console.log(response);
    })
}