import axios from "axios";
import Cookies from "universal-cookie";
import apiClient from "./apiService";
import {useNotification} from "../components/Error/GlobalError";
import {NotificationType} from "../context/error_context";

const cookies = new Cookies();

const API_URL = "http://127.0.0.1:10000/posts";

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

    axios.delete(API_URL + `/post-delete/{post_id}`,{
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
        return response;
    }).catch(error => {
        console.log(error);
    })
}

export const postGenDetail = async (post_id) => {
    try {
        const response = await axios.get(API_URL + `/post/${post_id}`, {
            // withCredentials: true,
            // headers: {
            //     'Content-Type': 'multipart/form-data',
            // },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error; // Re-throw the error for handling in the component
    }
}

export const fetchPosts = async (page = 1) => {
    console.log(page)
    try {
        const response = await apiClient.get(`/posts/post-list/?page=${page}`, {
            // params: { page },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        // useNotification().showNotification(
        //     error.message,
        //     NotificationType.ERROR
        // );
        console.log("handle fetch post error");
        throw error;
    }
};