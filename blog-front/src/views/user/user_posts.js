import React from "react";
import {UserMeInfoContainer, UserMeLeftPanel} from "./user_info_styled";
import {IconPanelContainer} from "../../components/AdminPanel/styles/LeftPanelStyled";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/UserPanel/topbar";
import ExampleComponent from "../../components/UserPanel/components/home";
function UserPanel(){
    // we gonna render couple data about user posts and with all related data like each post we, will display chart with caliulcations and global info like views, likes etc
    /*
        I think that we can generate data in this format
        {
            id: ?.
            content: ?.
            title: ?
            details: {
             views : ?
             views_by_moenths or something like that
                
            }
        }
     */
    return (
        <UserMeInfoContainer>
            <UserMeLeftPanel>
                <IconPanelContainer>
                    <p style={{ fontSize: "30px" }}>Xoi</p>
                </IconPanelContainer>
                <p>dsadas</p>
                <p>dsadas</p>
                <p>dsadas</p>
                <p>dsadas</p>
            </UserMeLeftPanel>
            <div style={{ width: "100%", padding: "10px"}}>
                <Topbar/>
                <div className="user-info" style={{ padding: "20px" , width: "100%"}}>
                    <input type="text" placeholder="username"/>
                    <input type="text" placeholder="password"/>
                    <input type="text" placeholder="nickname"/>
                    <button className="upload-changes">
                        Edit
                    </button>
                </div>
                <div style={{
                    display: "flex"
                }}>
                    <ExampleComponent cd b  />
                </div>
            </div>
        </UserMeInfoContainer>
    )
}
export default UserPanel;