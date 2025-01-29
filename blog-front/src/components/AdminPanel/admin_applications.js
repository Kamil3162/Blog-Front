import React from "react";

import {
    AdminPanelContainer, DashBoardContainer,

} from "./styles/admin_panel";
import {OptionAdminContainer, OptionChangeContainer, OptionsContainer} from "./components/app_options";
import LeftPanel from "./components/left_panel";

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