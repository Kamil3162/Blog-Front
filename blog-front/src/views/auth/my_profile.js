import LeftPanel from "../../components/AdminPanel/components/left_panel";
import {
    AdminPanelContainer,
    DashBoardBussinesInfoContainer,
    DashBoardContainer,
    DashBoardInfoContainer
} from "../../components/AdminPanel/styles/admin_panel";
import {DASHBOARD_INFO} from "../../components/AdminPanel/constants/constant_panel";
import BusinessInfoCard from "../../components/AdminPanel/components/bussiness_info_card";
import DashboardInfoPanel from "../../components/AdminPanel/components/dashboard_info_panel";
import React from "react";

function MyProfile(){

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


export default MyProfile;