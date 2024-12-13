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
                <p>KamilDev</p>
            </IconPanelContainer>
            <LeftPanelElement>
                <LeftPanelElementIcon>
                    <img src={monitor}/>
                </LeftPanelElementIcon>
            </LeftPanelElement>
            <LeftPanelElement>
                <LeftPanelElementIcon>
                    <img src={table}/>
                </LeftPanelElementIcon>
            </LeftPanelElement>
            <LeftPanelElement>
                <LeftPanelElementIcon>
                    <img src={categories}/>
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
                                <img src={user}/>
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