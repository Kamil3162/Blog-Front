import React from "react";

import {
    AdminPanelContainer,
    DashBoardBussinesInfoContainer,
    DashBoardContainer,
    DashBoardInfoContainer,

} from "./styles/admin_panel";
import {DASHBOARD_INFO} from "./constants/constant_panel";
import BusinessInfoCard from "./components/bussiness_info_card";
import PostsTable from "./components/posts_table";
import LeftPanel from "./components/left_panel";
import DashboardInfoPanel from "./components/dashboard_info_panel";
import {InfoBlogsContainer} from "./styles/info_blogs";
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

