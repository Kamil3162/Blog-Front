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
import home from "../../../assets/icons/house.png";
import {Link} from "react-router-dom";

function LeftPanel({ userData }){

    return (
        <LeftPanelContainer>
            <IconPanelContainer>
                <p>KamilDev</p>
            </IconPanelContainer>
            <LeftPanelElement>
                {/*<LeftPanelElementIcon>*/}
                {/*    <a href="/">*/}
                {/*        <img src={house}/>*/}
                {/*    </a>*/}
                {/*</LeftPanelElementIcon>*/}
                <LeftPanelElementIcon>
                    <Link to="/">
                        <img src={home}/>
                    </Link>
                </LeftPanelElementIcon>
            </LeftPanelElement>
            <LeftPanelElement>
                {/*<LeftPanelElementIcon>*/}
                {/*    <a href="/">*/}
                {/*        <img src={house}/>*/}
                {/*    </a>*/}
                {/*</LeftPanelElementIcon>*/}
                <LeftPanelElementIcon>
                    <Link to="/admin-panel">
                        <img src={monitor}/>
                    </Link>
                </LeftPanelElementIcon>
            </LeftPanelElement>
            <LeftPanelElement>
                <LeftPanelElementIcon>
                    <Link to="/admin-panel/posts">
                        <img src={table}/>
                    </Link>
                </LeftPanelElementIcon>
            </LeftPanelElement>
            <LeftPanelElement>
                <LeftPanelElementIcon>
                    <Link to="/admin-panel/users">
                        <img src={users}/>
                    </Link>
                </LeftPanelElementIcon>
            </LeftPanelElement>
            <LeftPanelElement>
                <LeftPanelElementIcon>
                    <Link to="/admin-panel/categories">
                        <img src={categories}/>
                    </Link>
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
                                <Link to="/admin-panel/user">
                                    <img src={user}/>
                                </Link>
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