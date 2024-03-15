import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const API_URL = "http://127.0.0.1:10000";

export const postCreate = (title, category, content, photo) => {
    const formData = new FormData();

    formData.set('title', title);
    formData.set('category', category);
    formData.set('content', content);
    formData.set('photo', photo);

    axios.post(API_URL + '/post-create/',formData,{
        withCredentials: true, // This enables cross-origin requests to include cookies
        headers: {
            // Inform the server about the form-data content type
            // This line might be optional as browsers usually set the correct content type for FormData,
            // including the boundary parameter.
            'Content-Type': 'multipart/form-data',
        },
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })
}

export const postUpdate = () =>{

}

export const postDelete = () =>{

}

export const postDetail = () =>{

}

export const fetchPosts = () => {

}