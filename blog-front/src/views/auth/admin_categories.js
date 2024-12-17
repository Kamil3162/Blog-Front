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
import {InfoBlogsContainer} from "../../components/AdminPanel/styles/InfoBlogsStyled";
import PostsTable from "../../components/AdminPanel/components/PostsTable";
import React from "react";
import {OptionsContainer} from "../../components/AdminPanel/components/app_options";


function AdminCategories(){
    return (
        <AdminPanelContainer>
            <LeftPanel />
            <OptionsContainer>
                <p>Posts categories</p>
            </OptionsContainer>
        </AdminPanelContainer>
    )
}

export default AdminCategories;