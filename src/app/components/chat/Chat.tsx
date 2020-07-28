import React from 'react';

import { useChat } from './useChat';

import './Chat.scss';

function Chat() {
    const { auth, chat } = useChat();

    if (!chat) {
        return null;
    }

    return (
        <div className="chat">
            {chat.messages.map((message, index) => (
                <div className="chat__message" key={index}>
                    <div>{message.text}</div>
                    <div>{message.sendTime.toLocaleString()}</div>
                    <div>{message.sender}</div>
                </div>
            ))}
            <div className="chat__footer">
                <input />
            </div>
        </div>
    );
}

export default Chat;
