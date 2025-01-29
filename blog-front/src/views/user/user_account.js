import {IconPanelContainer} from "../../components/AdminPanel/styles/left_panel";
import listview from "../../assets/icons/listview.png";
import {MainContentWrapper, NavbarWrapper, UserMeInfoContainer, UserMeLeftPanel} from "./user_info_styled";
import Topbar from "../../components/UserPanel/topbar";
import ExampleComponent from "../../components/UserPanel/components/home";
import React, {useState} from "react";
import {
    Avatar,
    Header,
    Label,
    LeftSection,
    OrganizationText,
    PersonalInfoShort,
    PersonImage,
    PersonNamePosition,
    PersonStaffInfo,
    RightSection,
    StyledH1,
    UserInfoAccContainer,
    UserInformationAccess,
    UserInformationContainer,
    Username,
    UserProfile1
} from "../../components/UserProfile/styles";
import key from "../../assets/icons/key.png";
import {OptionsContainer} from "../../components/AdminPanel/components/app_options";
import {LoginInputField} from "../../assets/styledCss/AccountingStyled";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {NavbarElement} from "../../assets/styledCss/NavbarStyled";


export const InputUserDataWrapper = styled.div`
  width: 100px;
  height: 40px;
`;
const CustomLoginInput = ({ value, onChange, type, ...props }) => {
    return (
        <LoginInputField
            type={type}
            value={value}
            onChange={onChange}
            style={{ width: '100px', height: '40px' }}
            {...props}
        />
    );
};

function colapsedPanel(value){
    return (
        <UserMeLeftPanel isColapsed={value}>
            <p>My Posts</p>
            <p>My Profile</p>
            <p>Settings</p>
        </UserMeLeftPanel>
    )
}

function UserAccount(){
    const [isColapsed, setIsColapsed] = useState(true);

    const handleColapsed = () => {
        setIsColapsed(!isColapsed);
    }

    function colapsedPanel(value){
        return (
            <UserMeLeftPanel isColapsed={value}>
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/me/account">
                    <p>Account</p>
                </Link>
                <Link to="/me">
                    <p>Posts</p>
                </Link>
            </UserMeLeftPanel>
        )
    }
    return (
        <UserMeInfoContainer>
            <NavbarWrapper>
                <NavbarElement onClick={handleColapsed}>
                    <img src={listview} width="30px" height="30px" alt="menu"/>
                </NavbarElement>
            </NavbarWrapper>

            { colapsedPanel(isColapsed) }
            <MainContentWrapper>
                <div style={{ marginLeft: "150px"}}>
                    <Topbar/>
                </div>
                <div style={{
                    display: "flex"
                }}>
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
                                        <h1>Dsadsa</h1>
                                        <div style={{ display: "inline-block"}}>
                                            <StyledH1>dsadsa |</StyledH1>
                                            <StyledH1 fontSize="13px">esa</StyledH1>
                                        </div>
                                    </PersonStaffInfo>
                                </PersonNamePosition>
                                <UserInformationAccess>
                                    <UserInfoAccContainer>
                                        <h1>
                                            Staff Account:
                                        </h1>
                                        <input type="text" value="testowy32"/>
                                    </UserInfoAccContainer>
                                    <UserInfoAccContainer>
                                        <h1>
                                            Staff Account:
                                        </h1>
                                        <input type="text" value="testowy32"/>
                                    </UserInfoAccContainer>
                                    <UserInfoAccContainer>
                                        <h1>
                                            Staff Account:
                                        </h1>
                                        <input type="text" value="testowy32"/>
                                    </UserInfoAccContainer>
                                </UserInformationAccess>
                            </PersonalInfoShort>
                        </UserInformationContainer>
                    </OptionsContainer>
                </div>
            </MainContentWrapper>
        </UserMeInfoContainer>
    )
}

export default UserAccount;