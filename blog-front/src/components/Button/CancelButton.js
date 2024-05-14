import {ButtonContainer} from "./button_styled/ButtonStyled";
import delete_icon from "../../assets/icons/x-mark.png";


function CancelButton({onClick}){
    console.log("cancel ");
    return (
        <ButtonContainer onClick={onClick}>
            Cancel Changes
        </ButtonContainer>
    )
}

export default CancelButton;