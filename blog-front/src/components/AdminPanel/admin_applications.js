import React from "react";

import {
    AdminPanelContainer, DashBoardContainer,

} from "./styles/AdminPanelStyled";
import {OptionAdminContainer, OptionChangeContainer, OptionsContainer} from "./components/app_options";
import LeftPanel from "./components/LeftPanel";

function AdminApplications(){
    return (
        <AdminPanelContainer>
            <LeftPanel />
            <OptionsContainer>
                <p>dsa</p>
                <OptionChangeContainer>
                    <OptionAdminContainer>
                        <p>Users</p>

                    </OptionAdminContainer>
                    <OptionAdminContainer>
                        <p>Categories</p>

                    </OptionAdminContainer>
                    <OptionAdminContainer>
                        <p>Posts</p>

                    </OptionAdminContainer>
                    <OptionAdminContainer>
                        <p>dsa</p>
                    </OptionAdminContainer>
                </OptionChangeContainer>
            </OptionsContainer>
        </AdminPanelContainer>
    )
}
export default AdminApplications;