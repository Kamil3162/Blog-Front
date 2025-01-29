import Navbar from "../../components/Navbar/navbar";
import RolloutOptions from "../../components/RolloutOptions/rollout";
import PostCreate from "../../components/Posts/post_create";
import {HomeContainer} from "../../assets/styledCss/HomeStyled";
import React from "react";
import Footer from "../../components/Footer/footer";

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