import React, {useState} from "react";
import { Route, Navigate } from 'react-router-dom';
import {useAuth} from "./AuthContext";


function PrivateRoute({ children }){
    const { authToken } = useAuth();
    return authToken ? children : <Navigate to="/home" />;

}

export default PrivateRoute;