import React, {useContext} from 'react';
import {NotificationContext, NotificationType} from '../../context/error_context';
import { motion, AnimatePresence } from 'framer-motion';
import "./css/global_error.css";

export const NotificationDisplay = () => {
    const { notification } = useContext(NotificationContext);

    const getBackgroundColor = (type) => {
        switch (type) {
            case NotificationType.SUCCESS: return 'bg-green-500';
            case NotificationType.WARNING: return 'bg-yellow-500';
            case NotificationType.ERROR: return 'bg-red-500';
            default: return 'bg-blue-500';
        }
    };

    return (
        <AnimatePresence>
            {/*{notification && (*/}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 20 }}
                    exit={{ opacity: 0, y: -50 }}
                    className="global-error"
                >
                    {/*{notification.message} /!* Show actual error message *!/*/}
                </motion.div>
            {/*)}*/}
        </AnimatePresence>
    );
};

export const useNotification = () => useContext(NotificationContext);

