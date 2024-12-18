import React, {useState} from "react";
import {
    AuthButton,
    NavbarContainer, NavbarElement,
    NavbarElementsContainer, NavigationElement,
    SearchContainer,
    SearchField, SearchIconContainer, SignUpButton
} from "../../assets/styledCss/NavbarStyled";
import { WindowSizeContext} from "../../context/WindowsSizeContext";
import { NavigationVisibilityContext} from "../../context/NavigationVisibilityContext";
import photo1 from "../../assets/icons/loop.png";
import listview from "../../assets/icons/listview.png";
import {useContext} from "react";
import { logout } from "../../services/user";
import { getUserDataCookies } from "../../utils/tools_functions";
import {useAuth} from "../../context/AuthContext";
import {searchPost} from "../../utils/search_field_functions";
import NavbarContext from "../../context/nav_contextes/nav_context";
import RolloutOptions from "../RolloutOptions/RolloutOptions";


function Navbar(){
    const [searchTerm, setSearchTerm] = useState("");
    const { width } = useContext(WindowSizeContext);
    const { isNavVisible, setIsNavVisible } = useContext(NavigationVisibilityContext);
    const { authToken } = useAuth();

    const { handlePostSearch } = useContext(NavbarContext);

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
        handlePostSearch(searchTerm);
    }

    const renderNavItems = () => {
        if (width > 500){
            return (
                <>
                    <NavbarElement>
                        <a href="/">
                            Home
                        </a>
                    </NavbarElement>
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
                </>
            )
        }
        else {
            return (
                <NavbarElement onClick={toggleNavVisibility}>
                    <img src={listview} width="30px" height="30px"/>
                </NavbarElement>
            )
        }
    }
    return (
        <>

        <NavbarContainer>
                <NavbarElementsContainer alignment="flex-end">
                    {renderNavItems()}
                </NavbarElementsContainer>
                <NavbarElementsContainer alignment="center">
                </NavbarElementsContainer>
                <NavbarElementsContainer alignment="flex-end">
                    <SearchContainer>
                        <SearchField
                            type="text"
                            placeholder="Search..."
                            onChange={handleSearchInputChange}
                        />
                        <SearchIconContainer>
                            <img src={photo1} width="20px" height="20px" onClick={handleSearchClick}/>
                        </SearchIconContainer>
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
        </>
    )
}
export default Navbar;