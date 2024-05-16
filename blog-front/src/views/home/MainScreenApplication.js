import React, {useEffect, useState} from "react";
import {MainContainer} from "../../assets/styledCss/MainStyled";
import NavContext from "../../context/NavbarContext";

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
        <NavContext>
            <MainContainer>
                {children}
            </MainContainer>
        </NavContext>
    )
}

export default MainScreenApplication;