import {LeftPanelElement, LeftPanelElementIcon} from "../styles/LeftPanelStyled";
import {
    DashBoardBussinessElement,
    DashboardBussinessInfo,
    DashBoardBussinessTextContainer
} from "../styles/AdminPanelStyled";


function BusinessInfoCard ({ title, value, icon}){
    return (
        <DashBoardBussinessElement>
            <DashBoardBussinessTextContainer>
                <h1> {title} </h1>
                <p> {value} </p>
            </DashBoardBussinessTextContainer>
            <DashboardBussinessInfo>
                <img src={icon}/>
            </DashboardBussinessInfo>
        </DashBoardBussinessElement>
    )
}

export default BusinessInfoCard;