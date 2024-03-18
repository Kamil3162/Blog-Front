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
            'Content-Type': 'multipart/form-data',
        },
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })
}

export const postUpdate = (post_id, title, content) =>{
    const formData = new FormData();

    formData.append('content', content);
    formData.append('title', title);

    axios.put(API_URL + `/post-update/{post_id}`, formData,{
        withCredentials: true, // This enables cross-origin requests to include cookies
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })
}

export const postDelete = (post_id) =>{

    axios.delete(API_URL + `/post-update/{post_id}`,{
        withCredentials: true, // This enables cross-origin requests to include cookies
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })

}

export const postDetail = (post_id) =>{
    axios.put(API_URL + `/post/{post_id}`,{
        withCredentials: true, // This enables cross-origin requests to include cookies
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })
}

export const fetchPosts = () => {
    axios.get(API_URL + '/posts',{

    }).then(response =>{
        console.log(response);
    }).catch(error =>{
        console.log(error);
    })
}