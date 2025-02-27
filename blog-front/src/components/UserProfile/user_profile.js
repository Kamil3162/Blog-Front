import React from "react";
import { useAuth } from "../../context/AuthContext";
import {AdminPanelContainer} from "../AdminPanel/styles/admin_panel";
import LeftPanel from "../AdminPanel/components/left_panel";
import {
    Avatar,
    Header,
    Label,
    LeftSection,
    OrganizationText,
    PersonalInfoAdd,
    PersonalInformationContainer,
    PersonalInfoShort,
    PersonImage,
    PersonNamePosition,
    PersonStaffInfo,
    PhotoHolder,
    RightSection, StyledH1,
    UserDetail,
    UserInfoAccContainer,
    UserInformationAccess,
    UserInformationContainer,
    Username,
    UserOnline,
    UserProfile1
} from "./styles";

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
                    <PersonalInformationContainer>

                    <p>Stats / Staff list / Staff Detail</p>
                    <PersonalInfoShort>
                        <PersonNamePosition>
                            <PersonImage src={key}/>
                            <PersonStaffInfo>
                                <h1>Dsadsa</h1>
                                <div style={{ display: "inline-block"}}>
                                    <p>dsadsa </p>
                                    <p fontSize="13px">esa</p>
                                </div>
                            </PersonStaffInfo>
                        </PersonNamePosition>
                        <UserInformationAccess>
                            <UserInfoAccContainer>
                                <h1>
                                    Staff Account:
                                </h1>
                                <p>
                                    testowy32
                                </p>
                            </UserInfoAccContainer>
                            <UserInfoAccContainer>
                                <h1>
                                    Staff Account:
                                </h1>
                                <p>
                                    testowy32
                                </p>
                            </UserInfoAccContainer>
                            <UserInfoAccContainer>
                                <h1>
                                    Staff Account:
                                </h1>
                                <p>
                                    testowy32
                                </p>
                            </UserInfoAccContainer>
                        </UserInformationAccess>
                    </PersonalInfoShort>
                    </PersonalInformationContainer>

                    <PersonalInformationContainer>
                        <PersonalInfoAdd>
                            <div>
                                <UserInfoAccContainer>
                                    <h1>
                                        Staff Account:
                                    </h1>
                                    <p>
                                        testowy32
                                    </p>
                                </UserInfoAccContainer>
                                <UserInfoAccContainer>
                                    <h1>
                                        Staff Account:
                                    </h1>
                                    <p>
                                        testowy32
                                    </p>
                                </UserInfoAccContainer>
                                <UserInfoAccContainer>
                                    <h1>
                                        Staff Account:
                                    </h1>
                                    <p>
                                        testowy32
                                    </p>
                                </UserInfoAccContainer>
                                <UserInfoAccContainer>
                                    <h1>
                                        Staff Account:
                                    </h1>
                                    <p>
                                        testowy32
                                    </p>
                                </UserInfoAccContainer>
                            </div>
                            <div>
                                <UserInfoAccContainer>
                                    <h1>
                                        Staff Account:
                                    </h1>
                                    <p>
                                        testowy32
                                    </p>
                                </UserInfoAccContainer>
                                <UserInfoAccContainer>
                                    <h1>
                                        Staff Account:
                                    </h1>
                                    <p>
                                        testowy32
                                    </p>
                                </UserInfoAccContainer>
                                <UserInfoAccContainer>
                                    <h1>
                                        Staff Account:
                                    </h1>
                                    <p>
                                        testowy32
                                    </p>
                                </UserInfoAccContainer>
                                <UserInfoAccContainer>
                                    <h1>
                                        Staff Account:
                                    </h1>
                                    <p>
                                        testowy32
                                    </p>
                                </UserInfoAccContainer>
                            </div>
                        </PersonalInfoAdd>
                        <PersonalInfoAdd>
                            <UserInfoAccContainer>
                                <h1>
                                    Staff Account:
                                </h1>
                                <p>
                                    testowy32
                                </p>
                            </UserInfoAccContainer>

                        </PersonalInfoAdd>
                    </PersonalInformationContainer>
                </UserInformationContainer>
            </OptionsContainer>
            {/* Display more user information */}
        </AdminPanelContainer>
    )
}

export default UserProfile;