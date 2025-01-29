import {
    AuthButton,
    NavbarContainer, NavbarElement,
    NavbarElementsContainer,
    SearchContainer,
    SearchField, SearchIconContainer, SignUpButton
} from "../../assets/styledCss/NavbarStyled";
import photo1 from "../../assets/icons/loop.png";
import {Link} from "react-router-dom";
import React, {useContext, useState} from "react";
import {WindowSizeContext} from "../../context/WindowsSizeContext";
import {NavigationVisibilityContext} from "../../context/NavigationVisibilityContext";
import {useAuth} from "../../context/AuthContext";
import {NavCon} from "../../context/NavbarContext";
import {logout} from "../../services/user";
import listview from "../../assets/icons/listview.png";


function Topbar(){
    const [searchTerm, setSearchTerm] = useState("");
    const { width } = useContext(WindowSizeContext);
    const { isNavVisible, setIsNavVisible } = useContext(NavigationVisibilityContext);
    const { authToken } = useAuth();

    const { handlePostSearchByTitle } = useContext(NavCon);

    const handleLogout = () =>{
        console.log("click");
        logout();
    }

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
        console.log(isNavVisible);
    }

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        handlePostSearchByTitle(searchTerm);
    }

    const renderNavItems = () => {
        return (
            <NavbarElement onClick={toggleNavVisibility}>
                <img src={listview} width="30px" height="30px"/>
            </NavbarElement>
        )
    }

    return (
        <NavbarContainer>
            <NavbarElementsContainer alignment="flex-start">
                <SearchContainer
                    backgroundColor="black"
                    width="200px"
                >
                    <SearchField
                        type="text"
                        placeholder="Search..."
                        fontColor="white"
                        onChange={(e) => handlePostSearchByTitle(e.target.value)}
                    />
                    <SearchIconContainer
                        backgroundColor="white"
                        padding="7px"
                        borderRadius="20px"
                    >
                        <img src={photo1} width="20px" height="20px" onClick={handleSearchClick}/>
                    </SearchIconContainer>
                </SearchContainer>
                {/*{renderNavItems()}*/}
            </NavbarElementsContainer>
            <NavbarElementsContainer alignment="center">
            </NavbarElementsContainer>
            <NavbarElementsContainer alignment="flex-end">

                {
                    authToken ? (
                        <AuthButton text="Log in" onClick={handleLogout}>
                            <Link to="/home">
                                Logout
                            </Link>
                        </AuthButton>
                    ) : (
                        <>
                            <AuthButton text="Log in">
                                <Link to="/login">
                                    Log in
                                </Link>
                            </AuthButton>
                            <SignUpButton text="Sign up">
                                <Link to="/sing-up">
                                    Sign up
                                </Link>
                            </SignUpButton>
                        </>
                    )
                }
            </NavbarElementsContainer>
        </NavbarContainer>
    )
}

export default Topbar;