import {
    AdminPanelContainer,
    DashBoardBussinesInfoContainer,
    DashBoardBussinessElement, DashBoardBussinessTextContainer,
    DashBoardContainer
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
import {TopBarContainer} from "./styles/TopBarStyled";
import TopBar from "./components/TopBar";
import Navbar from "../Navbar/Navbar";

function AdminPanel(){
    return (
        <AdminPanelContainer>
            <LeftPanelContainer>
                <IconPanelContainer>
                    <img src={account}/>
                    <p>KamilDev Admin Panel</p>
                </IconPanelContainer>
                <LeftPanelElement>
                    <LeftPanelElementIcon>
                        <img src={monitor}/>
                    </LeftPanelElementIcon>
                    <LeftPanelElementText>
                        <p>Dashboard</p>
                    </LeftPanelElementText>
                </LeftPanelElement>
                <LeftPanelElement>
                    <LeftPanelElementIcon>
                        <img src={table}/>
                    </LeftPanelElementIcon>
                    <LeftPanelElementText>
                        <p>Table</p>
                    </LeftPanelElementText>
                </LeftPanelElement>
                <BreakPanel>
                    <LeftPanelElementText>ACCOUNT PAGES</LeftPanelElementText>
                </BreakPanel>
                <LeftPanelElement>
                    <LeftPanelElementIcon>
                        <img src={user}/>
                    </LeftPanelElementIcon>
                    <LeftPanelElementText>
                        <p>Register</p>
                    </LeftPanelElementText>
                </LeftPanelElement>
                <LeftPanelElement>
                    <LeftPanelElementIcon>
                        <img src={enter}/>
                    </LeftPanelElementIcon>
                    <LeftPanelElementText>
                        <p>Login</p>
                    </LeftPanelElementText>
                </LeftPanelElement>
                <LeftPanelElement>
                    <LeftPanelElementIcon>
                        <img src={power_off}/>
                    </LeftPanelElementIcon>
                    <LeftPanelElementText>
                        <p>Logout</p>
                    </LeftPanelElementText>
                </LeftPanelElement>
            </LeftPanelContainer>
            <DashBoardContainer>
                <TopBar/>
                <DashBoardBussinesInfoContainer>
                    <DashBoardBussinessElement>
                        <DashBoardBussinessTextContainer>
                            <LeftPanelElementText>
                                <p>Money</p>
                            </LeftPanelElementText>
                            <p>$54000</p>
                        </DashBoardBussinessTextContainer>
                        <LeftPanelElementIcon>
                            <img src={power_off}/>
                        </LeftPanelElementIcon>
                    </DashBoardBussinessElement>
                    <DashBoardBussinessElement>
                        <DashBoardBussinessTextContainer>
                            <LeftPanelElementText>
                                <p>Money</p>
                            </LeftPanelElementText>
                            <p>$54000</p>
                        </DashBoardBussinessTextContainer>
                        <LeftPanelElementIcon>
                            <img src={power_off}/>
                        </LeftPanelElementIcon>
                    </DashBoardBussinessElement>
                    <DashBoardBussinessElement>
                        <DashBoardBussinessTextContainer>
                            <LeftPanelElementText>
                                <p>Money</p>
                            </LeftPanelElementText>
                            <p>$54000</p>
                        </DashBoardBussinessTextContainer>
                        <LeftPanelElementIcon>
                            <img src={power_off}/>
                        </LeftPanelElementIcon>
                    </DashBoardBussinessElement>
                    <DashBoardBussinessElement>
                        <DashBoardBussinessTextContainer>
                            <LeftPanelElementText>
                                <p>Money</p>
                            </LeftPanelElementText>
                            <p>$54000</p>
                        </DashBoardBussinessTextContainer>
                        <LeftPanelElementIcon>
                            <img src={power_off}/>
                        </LeftPanelElementIcon>
                    </DashBoardBussinessElement>

                </DashBoardBussinesInfoContainer>
            </DashBoardContainer>
        </AdminPanelContainer>
    )
}
export default AdminPanel;