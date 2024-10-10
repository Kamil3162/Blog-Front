import {LeftPanelElement, LeftPanelElementIcon} from "../styles/LeftPanelStyled";
import {DashBoardBussinessElement, DashBoardBussinessTextContainer} from "../styles/AdminPanelStyled";
import money from "../../../assets/icons/money-bag.png";


function BusinessInfoCard ({ title, value, icon}){
    return (
        <DashBoardBussinessElement>
            <DashBoardBussinessTextContainer>
                <h1> {title} </h1>
                <p> {value} </p>
            </DashBoardBussinessTextContainer>
            <LeftPanelElementIcon>
                <img src={icon}/>
            </LeftPanelElementIcon>
        </DashBoardBussinessElement>
    )
}

export default BusinessInfoCard;