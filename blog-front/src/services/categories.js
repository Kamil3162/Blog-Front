import axios from "axios";
import jwt, {jwtDecode} from "jwt-decode";
import Cookies from "universal-cookie";
import axiosClientAPI from "./base";

const cookies = new Cookies();
const API_URL = "http://127.0.0.1:10000/categories"

export const fetchCategories = async () => {

    try {
        const response = await axiosClientAPI.get('categories/categories');
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
        const response = await axiosClientAPI.post('categories/create-category', category_data);
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
        const response = await axiosClientAPI.delete(`categories/delete-category/${category_id}`);
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

        const response = await axiosClientAPI.put(`categories/category-update/${category_id}`, category_update);
        console.log('Update category:', response);
        return response.data;

    }catch (error){
        console.error('Error update failed:', error);
        throw error;
    }
}

export const fetchNewestPost = async() =>{
    try{

        const response = axiosClientAPI.get('categories/newest-post');
        console.log("fetch newset post");
        return response;

    } catch (error){
        console.log("new error according to fetch nbewest post");
        throw error;
    }
}

