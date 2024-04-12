import delete_icon from "../../assets/icons/x-mark.png";
import {IconPanelContainer} from "../AdminPanel/styles/LeftPanelStyled";
import {ButtonContainer} from "./button_styled/ButtonStyled";


function DeleteButton({onClick}){
    console.log("render");
    return (
        <ButtonContainer onClick={onClick}>
            <img src={delete_icon}/>
        </ButtonContainer>
    )
}

export default DeleteButton;