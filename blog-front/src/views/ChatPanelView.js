import ChatPannel from "../components/ChatPannel/ChatPannel";
import {HomeContainer} from "../assets/styledCss/HomeStyled";
import Navbar from "../components/Navbar/Navbar";


function ChatPanelView(){
    return (
        <HomeContainer>
            <Navbar/>
            <ChatPannel/>
        </HomeContainer>
    )
}

export default ChatPanelView;