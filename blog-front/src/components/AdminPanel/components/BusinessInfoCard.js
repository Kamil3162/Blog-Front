import {useState} from "react";
import {LeftPanelElement, LeftPanelElementIcon} from "../styles/LeftPanelStyled";
import {DashBoardBussinessElement, DashBoardBussinessTextContainer} from "../styles/AdminPanelStyled";
import money from "../../../assets/icons/money-bag.png";


function BusinessInfoCard ({ title, value, icon}){
    return (
        <DashBoardBussinessElement>
            <DashBoardBussinessTextContainer>
                <h1>Money</h1>
                <p>$54,000</p>
            </DashBoardBussinessTextContainer>
            <LeftPanelElementIcon>
                <img src={money}/>
            </LeftPanelElementIcon>
        </DashBoardBussinessElement>
    )
}

export default BusinessInfoCard;