import axios from "axios";
import jwt, {jwtDecode} from "jwt-decode";
import Cookies from "universal-cookie";


const cookies = new Cookies();
const API_URL = "http://127.0.0.1:10000/categories"

const config = {
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
};

export const fetchCategories = async () => {

    try {
        const response = await axios.get(`${API_URL}/categories`, config);
        console.log('Fetch Categories Response:', response);
        return response.data; // Assuming the server response contains the desired data in the response body
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error; // Rethrowing the error might be useful if you have error handling at a higher level
    }
}

export const createCategory = async (category_name) => {
    const category_data = new FormData();

    category_data.set('category_name', category_name);

    try {
        const response = await axios.post(API_URL + '/create-category', category_data, config);
        console.log('Fetch Categories Response:', response);
        return response.data; // Assuming the server response contains the desired data in the response body
    } catch (error) {
        console.error('Error fetching categories:', error);
        // Handle or throw error appropriately - could differentiate based on error.response.status, etc.
        throw error; // Rethrowing the error might be useful if you have error handling at a higher level
    }

}

export const deleteCategory = async(category_id) => {
    try {
        const response = await axios.delete(API_URL + `/delete-category/${category_id}`, config);
        console.log('Fetch Categories Response:', response);
        return response.data; // Assuming the server response contains the desired data in the response body
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error; // Rethrowing the error might be useful if you have error handling at a higher level
    }
}

export const updateCategory = async(category_id, category_name) =>{
    try{
        const category_update = new FormData();
        category_update.set('category_name', category_name);

        const response = await axios.put(API_URL + `/category-update/${category_id}`, category_update, config);
        console.log('Update category:', response);
        return response.data;

    }catch (error){
        console.error('Error update failed:', error);
        throw error;
    }
}

export const fetchNewestPost = async() =>{
    try{

        const response = axios.get(API_URL + "/newest-post", config);
        console.log("fetch newset post");
        return response;

    } catch (error){
        console.log("new error according to fetch nbewest post");
        throw error;
    }
}

