import {PostDetailHeader} from "../assets/PostDetailStyled";
import {HomeContainer} from "../assets/HomeStyled";
import Navbar from "../components/Navbar/Navbar";
import RolloutOptions from "../components/RolloutOptions/RolloutOptions";
import ContentPart from "../components/ContentPart/ContentPart";
import HeaderPost from "../components/HeaderPost/HeaderPost";
import PostDetail from "../components/PostDetail/PostDetail";
import Categories from "../components/Categories/Categories";
import React from "react";


function PostDisplay(){
    return (
        <HomeContainer>
            <Navbar/>
            <RolloutOptions/>
            <PostDetail/>
        </HomeContainer>
    )
}

export default PostDisplay;