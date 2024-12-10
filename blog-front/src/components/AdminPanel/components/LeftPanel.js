import {
    BreakPanel,
    IconPanelContainer,
    LeftPanelContainer,
    LeftPanelElement,
    LeftPanelElementIcon, LeftPanelElementText
} from "../styles/LeftPanelStyled";
import account from "../../../assets/admin_icons/account.png";
import monitor from "../../../assets/admin_icons/monitor.png";
import table from "../../../assets/admin_icons/table.png";
import categories from "../../../assets/icons/categories.png";
import power_off from "../../../assets/admin_icons/power-off.png";
import user from "../../../assets/admin_icons/user.png";
import enter from "../../../assets/admin_icons/enter.png";


function LeftPanel({ userData }){

    return (
        <LeftPanelContainer>

            <IconPanelContainer>
                <img src={account}/>
                <h1>KamilDev Admin Panel</h1>
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
            <LeftPanelElement>
                <LeftPanelElementIcon>
                    <img src={categories}/>
                </LeftPanelElementIcon>
                <LeftPanelElementText>
                    <p>Categories</p>
                </LeftPanelElementText>
            </LeftPanelElement>
            <BreakPanel>
                <LeftPanelElementText>ACCOUNT PAGES</LeftPanelElementText>
            </BreakPanel>
            {
                userData ? (
                    <>
                        <LeftPanelElement>
                            <LeftPanelElementIcon>
                                <img src={power_off}/>
                            </LeftPanelElementIcon>
                            <LeftPanelElementText>
                                <p>Logout</p>
                            </LeftPanelElementText>
                        </LeftPanelElement>
                    </>
                ):(
                    <>
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
                    </>
                )
            }
        </LeftPanelContainer>
    )
}

export default LeftPanel;