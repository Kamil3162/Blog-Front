import React from "react";
import {MainContainer} from "../../assets/styledCss/MainStyled.js";
import {HomeContainer} from "../../assets/styledCss/HomeStyled";
import Navbar from "../../components/Navbar/navbar.js";
import HeaderPost from "../../components/HomeHeaderPost/home_post_header";
import ContentPart from "../../components/ContentPart/page_layout";
import RolloutOptions from "../../components/RolloutOptions/rollout";
import Categories from "../../components/Categories/categories";
import Footer from "../../components/Footer/footer";

function HomeScreen(){
    return (
        <HomeContainer>
            <Navbar/>
            <RolloutOptions/>
            <ContentPart>
                <HeaderPost title="tytul"></HeaderPost>
                <Categories/>
            </ContentPart>
            <Footer/>
        </HomeContainer>
    )
}

export default HomeScreen;