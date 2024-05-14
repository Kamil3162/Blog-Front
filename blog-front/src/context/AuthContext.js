import React, {createContext, useContext, useEffect, useState} from 'react';
import Cookies from "universal-cookie";
import {fetchValidateUser} from "../services/login_service";

import jwt, {jwtDecode} from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const cookies = new Cookies();
    const [authToken, setAuthToken] = useState(false);
    const [user, setUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    const login = () => {
        // cookies.set('access_token', token);
        // cookies.set('access_token', token,{
        //     path: '/',
        //     httpOnly: true,
        // });
        setAuthToken(true);
        console.log(authToken);
    };

    const logout = () => {
        setAuthToken(false);
        setUser(null);
    };

    const getUserDataCookies = () =>{
        console.log("wykonywanie fukncji getUserdataCookies");
        const cookies = new Cookies();
        const user_information = cookies.get('user_data');
        const access_token = cookies.get('access_token');

        const user_data = {
            'access_token': access_token,
            'user_data': user_information
        }

        if (user_data.access_token && user_data.user_data) {
            console.log("prawda");
            setAuthToken(true);
            return user_data;
        }

        console.log(authToken);

        return null;
    }

    const validateUser = async () => {
            const userData = await fetchValidateUser(setCurrentUser);
        if (userData) {
            setUser(userData);
        } else {
            setUser(null);
        }
    }

    useEffect(() => {
        getUserDataCookies();
    }, []);


    return (
        <AuthContext.Provider value={{ authToken, user, login, logout, currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};