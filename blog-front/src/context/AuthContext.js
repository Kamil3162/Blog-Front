import React, {createContext, useContext, useEffect, useState} from 'react';
import Cookies from "universal-cookie";
import {fetchValidateUser} from "../services/login_service";

import jwt, {jwtDecode} from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const cookies = new Cookies();
    const [authToken, setAuthToken] = useState(null);
    const [user, setUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    const login = (token) => {
        // cookies.set('access_token', token);
        // cookies.set('access_token', token,{
        //     path: '/',
        //     httpOnly: true,
        // });
        setAuthToken(token);
    };

    const logout = () => {
        setAuthToken(null);
        setUser(null);
    };

    const validateUser = async () => {
        const userData = await fetchValidateUser(setCurrentUser);
        if (userData) {
            setUser(userData);
        } else {
            setUser(null);
        }
    }

    // useEffect(() => {
    //     validateUser();
    // }, []);


    return (
        <AuthContext.Provider value={{ authToken, user, login, logout, currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};