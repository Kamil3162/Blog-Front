import ChatPannel from "../components/ChatPannel/ChatPannel";
import Navbar from "../components/Navbar/Navbar";
import RolloutOptions from "../components/RolloutOptions/RolloutOptions";
import PostCreate from "../components/Posts/PostCreate/PostCreate";
import Footer from "../components/Footer/Footer";
import {HomeContainer} from "../assets/styledCss/HomeStyled";
import React from "react";


function ChatPanelView(){
    return (
        <HomeContainer>
            <Navbar/>
            <ChatPannel/>
        </HomeContainer>
    )
}

export default ChatPanelView;