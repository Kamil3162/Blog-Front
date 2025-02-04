import React, {useState} from "react";
import {MainContentWrapper, NavbarWrapper, UserMeInfoContainer, UserMeLeftPanel} from "./user_info_styled";
import {IconPanelContainer} from "../../components/AdminPanel/styles/left_panel";
import Navbar from "../../components/Navbar/navbar";
import Topbar from "../../components/UserPanel/topbar";
import ExampleComponent from "../../components/UserPanel/components/home";
import listview from "../../assets/icons/listview.png";
import { Link } from "react-router-dom"
import {NavbarElement} from "../../assets/styledCss/NavbarStyled";
import Footer from "../../components/Footer/footer";


function UserPanel(){
    const [isColapsed, setIsColapsed] = useState(true);

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

    const handleColapsed = () => {
        setIsColapsed(!isColapsed);
    }

    return (
        <>
            <UserMeInfoContainer>
                <NavbarWrapper>
                    <NavbarElement onClick={handleColapsed}>
                        <img src={listview} width="30px" height="30px" alt="menu"/>
                    </NavbarElement>
                </NavbarWrapper>
                {
                    colapsedPanel(isColapsed)
                }
                <MainContentWrapper>
                    <div style={{ marginLeft: "150px"}}>
                        <Topbar/>
                    </div>
                    <div>
                        <ExampleComponent cd b  />
                    </div>
                </MainContentWrapper>
            </UserMeInfoContainer>
            <Footer/>
        </>

    )
}
export default UserPanel;