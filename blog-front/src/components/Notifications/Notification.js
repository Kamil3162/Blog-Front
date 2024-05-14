import {NotificationContainer, NotificationOptions, NotificationText} from "./NotificationStyles/NotificationStyled";
import {AuthButtonComponent} from "../Button/AuthButtonComponent";
import React from "react";


function Notification({text, option1, option2, funDelete=null, funUpdate=null, setModify=null, setDel=null}){

    const handleFunctionAction = (option, funName) =>{
        if(option === 'Accept'){
            funName();
        }
    }

    const handleActionStatus = (option) => {
        console.log("Handle action Sstatus");
        if(setModify){
            if(option === 'Decline'){
                setModify(false);
                console.log('clicked decline')
            }
        }
        else {
            if(option === 'Decline'){
                setDel(false);
            }
        }
    }

    const handleCLick = () => {
        console.log("click")
    }

    const handleUserDecision = (option) => {
        console.log("test");
        if(funDelete){
            // handleFunctionAction(option, funDelete);
            handleActionStatus(option);
        }
        if(funUpdate){
            handleFunctionAction(option, funUpdate);
            handleActionStatus(option);
        }
    }

    return (
        <NotificationContainer>
            <NotificationText>{text}</NotificationText>
            <NotificationOptions>
                <AuthButtonComponent
                    width={150}
                    height={50}
                    background={"blue"}
                    color={"white"}
                    text={option1}
                    funExecute={() => handleActionStatus(option1)}
                />
                <AuthButtonComponent
                    width={150}
                    height={50}
                    background={"red"}
                    color={"white"}
                    text={option2}
                    funExecute={() => handleActionStatus(option2)}
                />
            </NotificationOptions>
        </NotificationContainer>
    )
}

export default Notification;