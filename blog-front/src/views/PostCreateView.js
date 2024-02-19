import Navbar from "../components/Navbar/Navbar";
import RolloutOptions from "../components/RolloutOptions/RolloutOptions";
import PostCreate from "../components/PostCreate/PostCreate";
import {HomeContainer} from "../assets/HomeStyled";
import React from "react";
import Footer from "../components/Footer/Footer";

function PostCreateView(){
    return(
        <HomeContainer>
            <Navbar/>
            <RolloutOptions/>
            <PostCreate/>
            <Footer/>
        </HomeContainer>
    )
}
export default PostCreateView;