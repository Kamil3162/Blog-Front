
import React from "react";
import {MainContainer} from "../assets/MainStyled.js";
import {HomeContainer} from "../assets/HomeStyled";
import Navbar from "../components/Navbar/Navbar.js";
import HeaderPost from "../components/HeaderPost/HeaderPost";
import ContentPart from "../components/ContentPart/ContentPart";
import RolloutOptions from "../components/RolloutOptions/RolloutOptions";
import Categories from "../components/Categories/Categories";
function HomeScreen(){
    console.log("generowanie home screen");
    return (
        <HomeContainer>
            <Navbar/>
            <RolloutOptions/>
            <ContentPart>
                <HeaderPost title="tytul">dsa</HeaderPost>
                <Categories/>
            </ContentPart>
        </HomeContainer>
    )
}

export default HomeScreen;