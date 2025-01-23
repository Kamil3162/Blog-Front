import LeftPanel from "../../components/AdminPanel/components/LeftPanel";
import {
    AdminPanelContainer,
    DashBoardBussinesInfoContainer,
    DashBoardContainer,
    DashBoardInfoContainer
} from "../../components/AdminPanel/styles/AdminPanelStyled";
import {DASHBOARD_INFO} from "../../components/AdminPanel/constants/constant_panel";
import BusinessInfoCard from "../../components/AdminPanel/components/BusinessInfoCard";
import DashboardInfoPanel from "../../components/AdminPanel/components/DashboardInfoPanel";
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