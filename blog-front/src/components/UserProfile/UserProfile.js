import React from "react";
import { useAuth } from "../../context/AuthContext";

function UserProfile(){
    const { user } = useAuth();

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            {/* Display more user information */}
        </div>
    )
}