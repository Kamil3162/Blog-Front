import React from "react";

import {
    AdminPanelContainer,
    DashBoardBussinesInfoContainer,
    DashBoardContainer,
    DashBoardInfoContainer,

} from "./styles/AdminPanelStyled";
import {DASHBOARD_INFO} from "./constants/constant_panel";
import BusinessInfoCard from "./components/BusinessInfoCard";
import PostsTable from "./components/PostsTable";
import LeftPanel from "./components/LeftPanel";
import DashboardInfoPanel from "./components/DashboardInfoPanel";
import {InfoBlogsContainer} from "./styles/InfoBlogsStyled";
import image from "../../assets/icons/image.png";

function AdminPanel(){
    return (
        <AdminPanelContainer>
            <LeftPanel />
            <DashBoardContainer>
                <p>Dashboard</p>
                <DashBoardBussinesInfoContainer>
                    {DASHBOARD_INFO.map((info, index) => (
                        <BusinessInfoCard key={index} {...info} />
                    ))}
                </DashBoardBussinesInfoContainer>
                <DashBoardInfoContainer>
                    <DashboardInfoPanel />
                </DashBoardInfoContainer>
                {/*<InfoBlogsContainer>*/}
                {/*    <PostsTable />*/}
                {/*</InfoBlogsContainer>*/}
            </DashBoardContainer>
        </AdminPanelContainer>
    )
}
export default AdminPanel;

