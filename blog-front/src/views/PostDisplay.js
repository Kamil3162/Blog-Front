import {PostDetailHeader} from "../assets/styledCss/PostDetailStyled";
import {HomeContainer} from "../assets/styledCss/HomeStyled";
import Navbar from "../components/Navbar/Navbar";
import RolloutOptions from "../components/RolloutOptions/RolloutOptions";
import ContentPart from "../components/ContentPart/ContentPart";
import HeaderPost from "../components/HeaderPost/HeaderPost";
import PostDetail from "../components/PostDetail/PostDetail";
import Categories from "../components/Categories/Categories";
import React from "react";
import Footer from "../components/Footer/Footer";


function PostDisplay(){
    return (
        <HomeContainer>
            <Navbar/>
            <RolloutOptions/>
            <PostDetail/>
            <Footer/>
        </HomeContainer>
    )
}

export default PostDisplay;