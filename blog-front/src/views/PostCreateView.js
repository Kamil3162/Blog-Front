import Navbar from "../components/Navbar/Navbar";
import RolloutOptions from "../components/RolloutOptions/RolloutOptions";
import PostCreate from "../components/PostCreate/PostCreate";
import {HomeContainer} from "../assets/HomeStyled";
import React from "react";

function PostCreateView(){
    return(
        <HomeContainer>
            <Navbar/>
            <RolloutOptions/>
            <PostCreate/>
        </HomeContainer>
    )
}
export default PostCreateView;