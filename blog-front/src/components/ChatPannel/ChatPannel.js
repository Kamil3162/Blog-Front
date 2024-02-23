import React, { useEffect, useState } from 'react';

function WebSocketComponent() {
    const [ws, setWs] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Create WebSocket connection.
        const websocket = new WebSocket('ws://127.0.0.1:8000/ws');

        // Connection opened
        websocket.addEventListener('open', function (event) {
            websocket.send('Hello Server!'); // Send a message to the server
        });

        // Listen for messages
        websocket.addEventListener('message', function (event) {
            console.log(event);
            console.log('Message from server ', event.data);
            setMessages(prev => [...prev, event.data]);
        });

        // Update the ws state to use it later for sending messages
        setWs(websocket);

        // Don't forget to close the WebSocket connection when the component unmounts
        return () => {
            websocket.close();
        };
    }, []);

    const sendMessage = () => {
        if(ws) {
            ws.send('Hello from Client!');
        }
    };

    return (
        <div>
            <button onClick={sendMessage}>Send Message</button>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
}

export default WebSocketComponent;