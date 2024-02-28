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
import right_panel_color  from "../../assets/icons/rightpanel_color.jpg";
import bc_esa  from "../../assets/icons/bc_esa.jpg";
import money  from "../../assets/icons/money-bag.png";
import view  from "../../assets/icons/view.png";
import group  from "../../assets/icons/group.png";
import {TopBarContainer} from "./styles/TopBarStyled";
import TopBar from "./components/TopBar";
import Navbar from "../Navbar/Navbar";
import {InfoBlogsContainer, InfoBlogTableth, InfoBlogTH} from "./styles/InfoBlogsStyled";

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
                            <h1>Money</h1>
                            <p>$54,000</p>
                        </DashBoardBussinessTextContainer>
                        <LeftPanelElementIcon>
                            <img src={money}/>
                        </LeftPanelElementIcon>
                    </DashBoardBussinessElement>
                    <DashBoardBussinessElement>
                        <DashBoardBussinessTextContainer>
                            <h1>Users</h1>
                            <p>321</p>
                        </DashBoardBussinessTextContainer>
                        <LeftPanelElementIcon>
                            <img src={group}/>
                        </LeftPanelElementIcon>
                    </DashBoardBussinessElement>
                    <DashBoardBussinessElement>
                        <DashBoardBussinessTextContainer>
                            <h1>Views</h1>
                            <p>4,000</p>
                        </DashBoardBussinessTextContainer>
                        <LeftPanelElementIcon>
                            <img src={view}/>
                        </LeftPanelElementIcon>
                    </DashBoardBussinessElement>
                </DashBoardBussinesInfoContainer>
                <DashBoardInfoContainer>
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
                            <img src={chart}/>
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
                </DashBoardInfoContainer>
                <InfoBlogsContainer>
                    <DashBoardInfoFont>
                        Projects
                    </DashBoardInfoFont>
                    <LeftPanelElementText>
                        ✔️ 30 done this month
                    </LeftPanelElementText>
                    <table>
                        <tr>
                            <InfoBlogTableth>
                                TITLE
                            </InfoBlogTableth>
                            <InfoBlogTableth>
                                CATEGORY
                            </InfoBlogTableth>
                            <InfoBlogTableth>
                                ONWER
                            </InfoBlogTableth>
                            <InfoBlogTableth>
                                VIEWS
                            </InfoBlogTableth>
                            <InfoBlogTableth>
                                RATING
                            </InfoBlogTableth>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td>Germany</td>
                        </tr>
                    </table>
                </InfoBlogsContainer>
            </DashBoardContainer>
        </AdminPanelContainer>
    )
}
export default AdminPanel;