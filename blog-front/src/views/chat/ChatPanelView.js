import ChatPannel from "../../components/ChatPannel/chat_panel";
import {HomeContainer} from "../../assets/styledCss/HomeStyled";
import Navbar from "../../components/Navbar/navbar";


function ChatPanelView(){
    return (
        <HomeContainer>
            <Navbar/>
            <ChatPannel/>
        </HomeContainer>
    )
}

export default ChatPanelView;