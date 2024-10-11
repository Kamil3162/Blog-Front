import {HomeContainer} from "../../assets/styledCss/HomeStyled";
import Navbar from "../../components/Navbar/Navbar";
import RolloutOptions from "../../components/RolloutOptions/RolloutOptions";
import PostDetail from "../../components/Posts/PostDetail/PostDetail";
import React from "react";
import Footer from "../../components/Footer/Footer";


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