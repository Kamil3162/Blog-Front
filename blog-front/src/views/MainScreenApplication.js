import React, {useEffect, useState} from "react";
import {MainContainer} from "../assets/MainStyled";

function MainScreenApplication(props){

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
        <MainContainer>

            {props.children}
        </MainContainer>
    )
}

export default MainScreenApplication;