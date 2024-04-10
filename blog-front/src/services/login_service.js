import axios from "axios";
import jwt, {jwtDecode} from "jwt-decode";
import Cookies from "universal-cookie";

// import API_URL from "../config/api_path.js";

const cookies = new Cookies();
const API_URL = "http://127.0.0.1:10000"

export const register = (name, username, email, password) => {
    return axios.post(API_URL + '/register', {
        first_name: name,
        last_name: username,
        email: email,
        password: password
    })
        .then((response)=> {
            console.log(response);
        });
};
export const login_user = (username, password) => {
    const formData = new FormData();

    formData.append('username', username);
    formData.append('password', password);

    // Log the username and password (as you currently do)
    console.log(username, password);

    // Use axios to post the form data
    return axios.post(API_URL + '/token', formData, {
        withCredentials: true, // This enables cross-origin requests to include cookies
        headers: {
            // Inform the server about the form-data content type
            // This line might be optional as browsers usually set the correct content type for FormData,
            // including the boundary parameter.
            'Content-Type': 'multipart/form-data',
        },
    })
        .then((response) => {
            console.log(jwtDecode(response.data.access_token));
            const user_data = cookies.get('user_data');
            console.log(user_data.id)

            if (response.data.access_token) {
                console.log(response.data);
            }
            return response.data;
        });
}

export const fetchValidateUser = (setCurrentUser) => {
    console.log(API_URL);
    axios.get(API_URL + '/validate', {
        withCredentials: true, // This enables cross-origin requests to include cookies
        // credentials: 'include', // Important to include cookies
        headers: {
            // Inform the server about the form-data content type
            // This line might be optional as browsers usually set the correct content type for FormData,
            // including the boundary parameter.
            'Content-Type': 'application/json'
        },
    })
        .then(data => {
            console.log(data.data);
            console.log("sprawdzanie sesji klienta");
            if (data.authenticated) {
                setCurrentUser(data.user);
            } else {
                setCurrentUser(null);
            }
        });
}

export const logout = () => {
    console.log("invoke logout function");
    return axios.get(API_URL + '/logout', {
        withCredentials: true
    }).then(response => {
        console.log(response);
    })
}