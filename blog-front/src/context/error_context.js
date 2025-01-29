import React, { createContext, useState, useContext} from "react";
import {NotificationDisplay} from "../components/Error/global_error";

export const NotificationContext = createContext();

export const NotificationType = {
    ERROR: 'error',
    SUCCESS: 'success',
    WARNING: 'warning',
    INFO: 'info'
};

export const ErrorProvider = ({ children }) => {
    const [notification, setNotification] = useState(null);

    const showNotification = (message, type = NotificationType.ERROR) => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 5000);
    };

    return (
        <NotificationContext.Provider value={{ notification, showNotification }}>
            {children}
            <NotificationDisplay />
        </NotificationContext.Provider>
    );
};

