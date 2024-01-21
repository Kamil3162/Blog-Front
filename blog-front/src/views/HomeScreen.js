
import React from "react";
import {MainContainer} from "../assets/MainStyled.js";
import Navbar from "../components/Navbar/Navbar.js";
import HeaderPost from "../components/HeaderPost/HeaderPost";
import ContentPart from "../components/ContentPart/ContentPart";
import RolloutOptions from "../components/RolloutOptions/RolloutOptions";

function HomeScreen(){
    console.log("generowanie home screen");
    return (
        <div>
            <Navbar/>
            <RolloutOptions/>
            <ContentPart>
                <HeaderPost title="tytul">dsa</HeaderPost>
            </ContentPart>
        </div>
    )
}

export default HomeScreen;