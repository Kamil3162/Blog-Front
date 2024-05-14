import React from "react";
import {
    AuthButton,
    NavbarContainer, NavbarElement,
    NavbarElementsContainer, NavigationElement,
    SearchContainer,
    SearchField, SignUpButton
} from "../../assets/styledCss/NavbarStyled";
import { WindowSizeContext} from "../../context/WindowsSizeContext";
import { NavigationVisibilityContext} from "../../context/NavigationVisibilityContext";
import photo1 from "../../assets/icons/loop.png";
import listview from "../../assets/icons/listview.png";
import {useContext} from "react";
import { logout } from "../../services/login_service";
import { getUserDataCookies } from "../../utils/tools_functions";
import {useAuth} from "../../context/AuthContext";

function Navbar(){

    const { width } = useContext(WindowSizeContext);
    const { isNavVisible, setIsNavVisible } = useContext(NavigationVisibilityContext);
    const {authToken} = useAuth();

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
                        <NavbarElement>
                            <a href="/category/create">
                                About me
                            </a>
                        </NavbarElement>
                        <NavbarElement>
                            <a href="/home">
                                Home
                            </a>
                        </NavbarElement>
                        {
                            authToken && (
                                <>
                                    <NavbarElement>
                                        <a href="/post-create">
                                            Post Create
                                        </a>
                                    </NavbarElement>
                                    <NavbarElement>
                                        <a href="/category/create">
                                            Category Create
                                        </a>
                                    </NavbarElement>
                                    <NavbarElement>
                                        <a href="/admin-panel">
                                            Admin Panel
                                        </a>
                                    </NavbarElement>
                                </>
                            )
                        }
                    </>
                ) : (
                    // Content for smaller screens
                    <NavbarElement onClick={toggleNavVisibility}>
                        <img src={listview} width="30px" height="30px"/>
                    </NavbarElement>
                )}
            </NavbarElementsContainer>
            <NavbarElementsContainer alignment="center">
            </NavbarElementsContainer>
            <NavbarElementsContainer alignment="flex-end">
                <SearchContainer>
                    <div>
                        <img src={photo1} width="20px" height="20px"/>
                    </div>
                    <SearchField type="text" placeholder="Search..." />
                </SearchContainer>
                {
                    authToken ? (
                        <AuthButton text="Log in" onClick={handleLogout}>
                            <a href="/home">
                                Logout
                            </a>
                        </AuthButton>
                    ) : (
                        <>
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
                        </>
                    )
                }
            </NavbarElementsContainer>
        </NavbarContainer>
    )
}
export default Navbar;