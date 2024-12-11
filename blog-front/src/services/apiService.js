import axios from "axios";
import {useNotification} from "../components/Error/GlobalError";
import { toast } from "react-toastify";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:10000/",
    timeout: 10000
});


apiClient.interceptors.response.use(
    response => response,
    error => {
        let errorMessage = 'Something went wrong';

        if (error.message === 'Network Error' && !error.response){
            toast.error("Network error - make sure API is running!.")
        }

        if (!error.response) {
            errorMessage = 'Network error. Please check your internet connection.';
        } else {
            switch (error.response.status) {
                case 400:
                    errorMessage = error.response.data?.message || 'Invalid request';
                    break;
                case 401:
                    errorMessage = 'Please log in to continue';
                    window.location.href = '/login';
                    break;
                case 403:
                    errorMessage = 'You don\'t have permission to perform this action';
                    break;
                case 404:
                    errorMessage = 'The requested resource was not found';
                    break;
                case 422:
                    errorMessage = error.response.data?.message || 'Validation error';
                    break;
                case 500:
                    errorMessage = 'Server error. Please try again later';
                    break;
                default:
                    errorMessage = error.response.data?.message || 'Something went wrong';
            }
        }
// This will show your GlobalError component
        const { showNotification } = useNotification();
        showNotification(errorMessage, 'error');

        return Promise.reject({ message: errorMessage });
    }
);

export default apiClient;

