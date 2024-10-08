import {
    AdminPanelContainer,
    DashBoardBussinesInfoContainer,
    DashBoardBussinessElement,
    DashBoardBussinessTextContainer,
    DashBoardContainer,
    DashBoardInfoContainer,
    DashBoardInfoFont, DashBoardPanelsFonts, LeftDashBoardImageContainer,
    LeftDashBoardInfoContainer,
    LeftDashBoardPanelEsa, RightDashBoardBackGround,
    RightDashBoardInfoContainer
} from "./styles/AdminPanelStyled";
import {
    BreakPanel,
    IconPanelContainer,
    LeftPanelContainer,
    LeftPanelElement,
    LeftPanelElementIcon,
    LeftPanelElementText
} from "./styles/LeftPanelStyled";
import account from "../../assets/admin_icons/account.png";
import monitor from "../../assets/admin_icons/monitor.png";
import table from "../../assets/admin_icons/table.png";
import enter from "../../assets/admin_icons/enter.png";
import power_off from "../../assets/admin_icons/power-off.png";
import user from "../../assets/admin_icons/user.png";
import chart from "../../assets/icons/chart.png";
import money  from "../../assets/icons/money-bag.png";
import view  from "../../assets/icons/view.png";
import group  from "../../assets/icons/group.png";
import star from "../../assets/icons/star.png";
import categories from "../../assets/icons/categories.png";
import right_panel_color  from "../../assets/icons/rightpanel_color.jpg";
import bc_esa  from "../../assets/icons/bc_esa.jpg";

import {TopBarContainer} from "./styles/TopBarStyled";
import TopBar from "./components/TopBar";
import Navbar from "../Navbar/Navbar";

function AdminPanel(){
    return (
        <AdminPanelContainer>
            <DashBoardContainer>
                <DashBoardBussinessTextContainer>
                    <h1>Dashboard</h1>
                </DashBoardBussinessTextContainer>

                <DashBoardInfoContainer>

                </ DashBoardInfoContainer>
            </DashBoardContainer>
        </AdminPanelContainer>
    )
}
export default AdminPanel;

