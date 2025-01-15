import React, {useEffect, useState} from "react";
import {MainContainer} from "../../assets/styledCss/MainStyled";
import NavContext from "../../context/NavbarContext";
import NavContextProvider from "../../context/NavbarContext";

function MainScreenApplication({children}){

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = setWidth(window.innerWidth);

        window.addEventListener("resize", handleResizeWindow);

        console.log(width);

        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <NavContextProvider>
            <MainContainer>
                {children}
            </MainContainer>
        </NavContextProvider>
    )
}

export default MainScreenApplication;