import {NotificationContainer, NotificationOptions, NotificationText} from "./NotificationStyles/NotificationStyled";
import {AuthButtonComponent} from "../Button/AuthButtonComponent";
import React from "react";


function Notification({text, option1, option2}){
    return (
        <NotificationContainer>
            <NotificationText>{text}</NotificationText>
            <NotificationOptions>
                <AuthButtonComponent
                    width={150}
                    height={50}
                    background={"blue"}
                    color={"white"}
                    text={option1}/>
                <AuthButtonComponent
                    width={150}
                    height={50}
                    background={"red"}
                    color={"white"}
                    text={option2}/>
            </NotificationOptions>
        </NotificationContainer>
    )
}

export default Notification;