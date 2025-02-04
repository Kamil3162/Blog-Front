import  axios  from "axios";
import { jwtDecode }  from "jwt-decode";
import Cookies from "universal-cookie";
import axiosClientAPI from "./base";

const cookies = new Cookies();

export const register = (name, username, email, password) => {
    return axiosClientAPI.post('/auth/register', {
        first_name: name,
        last_name: username,
        email: email,
        password: password
    },{
	headers:
	  {'Content-Type': 'application/json',}
	,withCredentials: true
    })
        .then((response)=> {
            console.log(response);
        });
};

 // function responsible for send data during login
export const login_user = (username, password) => {
    const formData = new FormData();

    formData.append('username', username);
    formData.append('password', password);

    // Log the username and password (as you currently do)
    console.log(username, password);

    // Use axios to post the form data
    return axiosClientAPI.post('/auth/token', formData, {
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
            console.log(user_data)

            if (response.data.access_token) {
                console.log(response.data);
            }
            return response.data;
        });
}

export const fetchValidateUser = (setCurrentUser) => {
    axiosClientAPI.get('/auth/validate', {
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

    const cookie = new Cookies();

    cookie.remove("user_data");
    cookie.remove("access_token");
    cookie.remove("refresh_token");

    return axiosClientAPI.get('/auth/logout', {
        withCredentials: true
    }).then(response => {
        console.log(response);
    })
}

