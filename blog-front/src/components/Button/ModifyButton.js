import {ButtonContainer, ButtonModifyContainer} from "./button_styled/ButtonStyled";
import edit from "../../assets/icons/editing.png";


function ModifyButton({onClick}){
    console.log("redner mod");
    return (
        <ButtonModifyContainer onClick={onClick}>
            <img src={edit}/>
        </ButtonModifyContainer>
    )
}

export default ModifyButton;