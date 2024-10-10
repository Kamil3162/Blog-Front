
import React from "react";
import {MainContainer} from "../../assets/styledCss/MainStyled.js";
import {HomeContainer} from "../../assets/styledCss/HomeStyled";
import Navbar from "../../components/Navbar/Navbar.js";
import HeaderPost from "../../components/HeaderPost/HeaderPost";
import ContentPart from "../../components/ContentPart/ContentPart";
import RolloutOptions from "../../components/RolloutOptions/RolloutOptions";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
function HomeScreen(){
    return (
        <HomeContainer>
            <Navbar/>
            <RolloutOptions/>
            <ContentPart>
                <HeaderPost title="tytul">dsa</HeaderPost>
                <Categories/>
            </ContentPart>
            <Footer/>
        </HomeContainer>
    )
}

export default HomeScreen;