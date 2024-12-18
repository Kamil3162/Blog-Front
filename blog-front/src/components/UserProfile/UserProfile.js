import React from "react";
import { useAuth } from "../../context/AuthContext";
import {AdminPanelContainer} from "../AdminPanel/styles/AdminPanelStyled";
import LeftPanel from "../AdminPanel/components/LeftPanel";
import {
    Avatar,
    Header, Label,
    LeftSection,
    OrganizationText, PersonalInfoShort, PersonImage, PersonNamePosition, PersonStaffInfo,
    PhotoHolder,
    RightSection,
    UserDetail, UserInformationContainer, Username,
    UserOnline, UserProfile1
} from "./user_styles";
import {OptionsContainer} from "../AdminPanel/components/app_options";
import key from "../../assets/icons/key.png";
function UserProfile(){
    // const { user } = useAuth();

    return (
        <AdminPanelContainer>
            <LeftPanel/>
            <OptionsContainer>
                <Header>
                    <LeftSection>
                        <OrganizationText>Your organization</OrganizationText>
                        <Label>
                            SJ Label
                        </Label>
                    </LeftSection>

                    <RightSection>
                        <UserProfile1>
                            <Avatar src={key}/>
                            <Username>Hang Minh Nguyen</Username>
                            {/*<DropdownIcon /> /!* Your dropdown icon component *!/*/}
                        </UserProfile1>
                    </RightSection>
                </Header>
                <UserInformationContainer>
                    <p>Stats / Staff list / Staff Detail</p>
                    <PersonalInfoShort>
                        <PersonNamePosition>
                            <PersonImage src={key}/>
                            <PersonStaffInfo>
                                <h1>dsadsa</h1>
                                <p>dsadsa</p>
                            </PersonStaffInfo>
                        </PersonNamePosition>
                        <PersonStaffInfo>

                        </PersonStaffInfo>
                    </PersonalInfoShort>
                </UserInformationContainer>

            </OptionsContainer>
            {/* Display more user information */}
        </AdminPanelContainer>
    )
}

export default UserProfile;