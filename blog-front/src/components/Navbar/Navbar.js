import React from "react";
import {
    AuthButton,
    NavbarContainer, NavbarElement,
    NavbarElementsContainer,
    SearchContainer,
    SearchField, SignUpButton
} from "../../assets/NavbarStyled";
import { WindowSizeContext} from "../../context/WindowsSizeContext";
import { NavigationVisibilityContext} from "../../context/NavigationVisibilityContext";
import photo1 from "../../assets/loop.png";
import listview from "../../assets/listview.png";
import {useContext} from "react";

function Navbar(){

    const { width } = useContext(WindowSizeContext);
    const { isNavVisible, setIsNavVisible } = useContext(NavigationVisibilityContext);
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
                        <img src={photo1} width="30px" height="30px"/>
                    </div>
                    <SearchField type="text" placeholder="Search..." />
                </SearchContainer>
                <AuthButton text="Log in">
                    <a href="/login">
                        Log in
                    </a>
                </AuthButton>
                <SignUpButton text="Sign up">
                    <a href="/sign-up">
                        Sign up
                    </a>
                </SignUpButton>
            </NavbarElementsContainer>
        </NavbarContainer>
    )
}
export default Navbar;