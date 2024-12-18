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
import users from "../../../assets/icons/users.png";

function LeftPanel({ userData }){

    return (
        <LeftPanelContainer>
            <IconPanelContainer>
                <p>KamilDev</p>
            </IconPanelContainer>
            <LeftPanelElement>
                <LeftPanelElementIcon>
                    <a href="/admin-panel">
                        <img src={monitor}/>
                    </a>
                </LeftPanelElementIcon>
            </LeftPanelElement>
            <LeftPanelElement>
                <LeftPanelElementIcon>
                    <a href="/admin-panel/posts">
                        <img src={table}/>
                    </a>
                </LeftPanelElementIcon>
            </LeftPanelElement>
            <LeftPanelElement>
                <LeftPanelElementIcon>
                    <a href="/admin-panel/users">
                        <img src={users}/>
                    </a>
                </LeftPanelElementIcon>
            </LeftPanelElement>
            <LeftPanelElement>
                <LeftPanelElementIcon>
                    <a href="/admin-panel/categories">
                        <img src={categories}/>
                    </a>
                </LeftPanelElementIcon>
            </LeftPanelElement>
            {
                userData ? (
                    <>
                        <LeftPanelElement>
                            <LeftPanelElementIcon>
                                <img src={power_off}/>
                            </LeftPanelElementIcon>
                        </LeftPanelElement>
                    </>
                ):(
                    <>
                        <LeftPanelElement>
                            <LeftPanelElementIcon>
                                <a href="/admin-panel/user">
                                    <img src={user}/>
                                </a>
                            </LeftPanelElementIcon>
                        </LeftPanelElement>
                        <LeftPanelElement>
                            <LeftPanelElementIcon>
                                <img src={enter}/>
                            </LeftPanelElementIcon>
                        </LeftPanelElement>
                    </>
                )
            }
        </LeftPanelContainer>
    )
}

export default LeftPanel;