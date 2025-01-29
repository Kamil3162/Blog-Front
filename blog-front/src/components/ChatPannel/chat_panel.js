import React, { useEffect, useState } from 'react';
import Cookies from "universal-cookie";
import {OnlineUserContainer, OnlineUserUsernames, UsersListContainer} from "./styles/user_list";
import {ChatComponentContainer, ChatContentContainer} from "./styles/chat_style";

function WebSocketComponent() {
    const cookie = new Cookies();

    const [ws, setWs] = useState(null);
    const [messages, setMessages] = useState([]);
    const [userid, setUserId] = useState('');

    const user_data = cookie.get('user_data');
    // const user_id = user_data.id;

    // console.log(user_id);

    useEffect(() => {
        console.log("ws start")
        // Create WebSocket connection.
        // const websocket = new WebSocket(`ws://127.0.0.1:10000/ws/${user_id}`);
        //
        // // Connection opened
        // websocket.addEventListener('open', function (event) {
        //
        //     const object = {
        //         'type': 'info',
        //         'message': 'Hello Server!'
        //     };
        //
        //     websocket.send(JSON.stringify(object)); // Send a message to the server
        // });
        //
        // // Listen for messages
        // websocket.addEventListener('message', function (event) {
        //     let message_data = JSON.parse(event.data);
        //     if (message_data.type === 'info_status'){
        //         console.log("to jest logowanie przez usera");
        //         console.log(message_data.message);
        //         console.log(message_data.user_id);
        //     }
        //     console.log('Message from server ', message_data.message);
        //     setMessages(prev => [...prev, message_data.message]);
        // });
        //
        // // Update the ws state to use it later for sending messages
        // setWs(websocket);
        //
        // // Don't forget to close the WebSocket connection when the component unmounts
        // return () => {
        //     websocket.close();
        // };
    }, []);

    const message = {
        clientId: 2,
        message: "hello back response from server"
    };

    const sendMessage = () => {
        if(ws) {
            ws.send(JSON.stringify({
                "source_usr": 2,
                "target_usr":"32",
                "message": "message"
            }));
        }
    };

    return (
        <ChatComponentContainer>
            <UsersListContainer>
                <OnlineUserContainer>
                    <OnlineUserUsernames>
                        esa
                    </OnlineUserUsernames>
                </OnlineUserContainer>
            </UsersListContainer>
            <ChatContentContainer>
                <div>
                    <button onClick={sendMessage}>Send Message</button>
                    {/*<ul>*/}
                    {/*    {messages.map((msg, index) => (*/}
                    {/*        <li key={index}>{msg}</li>*/}
                    {/*    ))}*/}
                    {/*</ul>*/}
                </div>
            </ChatContentContainer>
        </ChatComponentContainer>
    );
}

export default WebSocketComponent;