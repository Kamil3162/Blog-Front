import {createContext, useState} from "react";

export const NavigationVisibilityContext = createContext();

export const NavigationVisibilityProvider = ({ children }) => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    return (
        <NavigationVisibilityContext.Provider value={{ isNavVisible, setIsNavVisible }}>
            {children}
        </NavigationVisibilityContext.Provider>
    );
};

export default NavigationVisibilityProvider;