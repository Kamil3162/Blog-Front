import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

const WebSocketChat = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const wsRef = useRef(null);

    useEffect(() => {
        const connectWebSocket = () => {
            const ws = new WebSocket('ws://localhost:10000/ws');
            wsRef.current = ws;

            ws.onopen = () => {
                setIsConnected(true);
                console.log('Connected to WebSocket');
            };

            ws.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    setMessages(prev => [...prev, { text: data.message, received: true }]);
                } catch (error) {
                    console.error('Error parsing message:', error);
                }
            };

            ws.onerror = (error) => {
                console.error('WebSocket error:', error);
                setIsConnected(false);
            };

            ws.onclose = () => {
                console.log('Disconnected from WebSocket');
                setIsConnected(false);
                // Attempt to reconnect after 5 seconds
                setTimeout(connectWebSocket, 5000);
            };
        };

        connectWebSocket();

        return () => {
            if (wsRef.current) {
                wsRef.current.close();
            }
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim() && wsRef.current?.readyState === WebSocket.OPEN) {
            const messageObj = {
                type: 'message',
                content: inputMessage
            };
            wsRef.current.send(JSON.stringify(messageObj));
            setMessages(prev => [...prev, { text: inputMessage, received: false }]);
            setInputMessage('');
        }
    };

    return (
        <div className="flex flex-col h-96 w-full max-w-2xl mx-auto bg-white rounded-lg shadow">
            {/* Connection Status */}
            <div className={`px-4 py-2 ${isConnected ? 'bg-green-100' : 'bg-red-100'} rounded-t-lg`}>
                <span className={`inline-block w-2 h-2 rounded-full mr-2 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></span>
                {isConnected ? 'Connected' : 'Disconnected'}
            </div>

            {/* Messages Container */}
            <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`mb-2 p-2 rounded-lg max-w-[80%] ${
                            msg.received
                                ? 'bg-gray-100 ml-0'
                                : 'bg-blue-500 text-white ml-auto'
                        }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            {/* Input Form */}
            <form onSubmit={sendMessage} className="p-4 border-t">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        disabled={!isConnected}
                        className={`px-4 py-2 rounded-lg ${
                            isConnected
                                ? 'bg-blue-500 hover:bg-blue-600'
                                : 'bg-gray-300'
                        } text-white`}
                    >
                        <Send size={20} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default WebSocketChat;