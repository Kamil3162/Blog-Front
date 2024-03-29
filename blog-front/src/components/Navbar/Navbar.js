import React from "react";
import {
    AuthButton,
    NavbarContainer, NavbarElement,
    NavbarElementsContainer,
    SearchContainer,
    SearchField, SignUpButton
} from "../../assets/styledCss/NavbarStyled";
import { WindowSizeContext} from "../../context/WindowsSizeContext";
import { NavigationVisibilityContext} from "../../context/NavigationVisibilityContext";
import photo1 from "../../assets/icons/loop.png";
import listview from "../../assets/icons/listview.png";
import {useContext} from "react";
import { logout } from "../../services/login_service";

function Navbar(){

    const { width } = useContext(WindowSizeContext);
    const { isNavVisible, setIsNavVisible } = useContext(NavigationVisibilityContext);

    const handleLogout = () =>{
        console.log("click");
        logout();
    }

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    }
    return (
        <NavbarContainer>
            <NavbarElementsContainer alignment="flex-start">
                {width > 500 ? (
                    // Content for screens wider than the breakpoint
                    <>
                        <NavbarElement>About me</NavbarElement>
                        <NavbarElement>Home</NavbarElement>
                        <NavbarElement onClick={handleLogout}>Logout</NavbarElement>
                    </>
                ) : (
                    // Content for smaller screens
                    <NavbarElement onClick={toggleNavVisibility}>
                        <img src={listview} width="30px" height="30px"/>
                    </NavbarElement>
                )}
            </NavbarElementsContainer>
            <NavbarElementsContainer alignment="center">
                <NavbarElement>Logo</NavbarElement>
            </NavbarElementsContainer>
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
        </NavbarContainer>
    )
}
export default Navbar;