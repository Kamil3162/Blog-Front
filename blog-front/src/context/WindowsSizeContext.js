import {useEffect, useState, createContext} from "react";

export const WindowSizeContext = createContext();

function WindowsSizeContext({children}) {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);

        handleResizeWindow();


        console.log(width);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    });

    return (
        <WindowSizeContext.Provider value={{width}}>
            {children}
        </WindowSizeContext.Provider>
    );
}

export default WindowsSizeContext;