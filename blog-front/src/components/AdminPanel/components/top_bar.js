import {
    AuthButton,
    NavbarElementsContainer,
    SearchContainer,
    SearchField,
    SignUpButton
} from "../../../assets/styledCss/NavbarStyled";
import photo1 from "../../../assets/icons/loop.png";
import React from "react";
import {TopBarContainer, TopBarHeader} from "../styles/top_bar";


function TopBar(){
    return (
        <TopBarContainer>
            <TopBarHeader>Dashboard</TopBarHeader>
            <NavbarElementsContainer alignment="flex-end">
                <SearchContainer>
                    <div>
                        <img src={photo1} width="20px" height="20px"/>
                    </div>
                    <SearchField type="text" placeholder="Search..." />
                </SearchContainer>
                <AuthButton text="Log in">
                    <a href="/login">
                        Log in
                    </a>
                </AuthButton>
                <SignUpButton text="Sign up">
                    <a href="/sing-up">
                        Sign up
                    </a>
                </SignUpButton>
            </NavbarElementsContainer>
        </TopBarContainer>
    )
}

export default TopBar;