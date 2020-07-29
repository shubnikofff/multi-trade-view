import React from 'react';

import { useChat } from './useChat';

import './Chat.scss';

interface ChatProps {
    smallScreen?: boolean,
}

function Chat({ smallScreen }: ChatProps) {
    const { chat, trade, removeTrade, setChatAsRead } = useChat();

    if (!trade) {
        return (
            <div>No such trade</div>
        );
    }

    setChatAsRead();

    return (
        <div className="chat">
            <div className="chat__header">
                <div><b>{trade.paymentMethod}</b></div>
                <div>{trade.buyer.name}</div>
                <button onClick={removeTrade}>Delete
                </button>
            </div>
            <div className="chat__body">
                {chat && chat.messages.map((message, index) => (
                    <div className="chat__message" key={index}>
                        <div>{message.text}</div>
                        <div>{message.sendTime.toLocaleString()}</div>
                        <div>{message.sender}</div>
                    </div>
                ))}
            </div>
            <div className="chat__footer">
                <input />
            </div>
        </div>
    );
}

export default React.memo<ChatProps>(Chat);
