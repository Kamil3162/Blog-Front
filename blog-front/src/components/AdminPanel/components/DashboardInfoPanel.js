import styled from "styled-components";
import {
    DashBoardInfoFont, DashBoardPanelsFonts,
    LeftDashBoardImageContainer,
    LeftDashBoardInfoContainer,
    LeftDashBoardPanelEsa, RightDashBoardInfoContainer
} from "../styles/AdminPanelStyled";
import {LeftPanelElementText} from "../styles/LeftPanelStyled";
import chart from "../../../assets/icons/chart.png";

const DashboardInfoPanel = () => {
    return (
        <>
        <LeftDashBoardInfoContainer>
            <LeftDashBoardPanelEsa>
                <LeftPanelElementText>
                    Built by developers
                </LeftPanelElementText>
                <DashBoardInfoFont>
                    Soft UI Dashboard
                </DashBoardInfoFont>
                <LeftPanelElementText>
                    From colors, cards, typography to complex elements, you will find the full documentation.
                </LeftPanelElementText>
            </LeftDashBoardPanelEsa>
            <LeftDashBoardImageContainer>
                <img src={chart} alt="Chart"/>
            </LeftDashBoardImageContainer>
        </LeftDashBoardInfoContainer>
        <RightDashBoardInfoContainer>
            <DashBoardPanelsFonts
                font_size="25" // Assuming you want the font size to be 16px
                font_weight="600" // Normal font weight
                font_family="'Raleway', sans-serif" // Specifying the font family
                margin_bottom="10" // Assuming you want a bottom margin of 10px
                color="white">
                Work with the rockets
            </DashBoardPanelsFonts>
            <DashBoardPanelsFonts
                font_size="18" // Assuming you want the font size to be 16px
                font_weight="600" // Normal font weight
                font_family="'Raleway', sans-serif" // Specifying the font family
                margin_bottom="10" // Assuming you want a bottom margin of 10px
                color="white">
                Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.
            </DashBoardPanelsFonts>
        </RightDashBoardInfoContainer>
    </>
    )
}

export default DashboardInfoPanel;