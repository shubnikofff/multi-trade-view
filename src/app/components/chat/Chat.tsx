import React from 'react';

import { Link } from 'react-router-dom';

import { useChat } from './useChat';

import { PATH_DASHBOARD, PATH_ROOT } from '../../constants';

import './Chat.scss';

interface ChatProps {
    smallScreen?: boolean,
}

function Chat({ smallScreen }: ChatProps) {
    const { chat, trade, removeTrade } = useChat();

    if (!trade) {
        return (
            <div>No such trade</div>
        );
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <div>
                    {smallScreen && <Link to={`${PATH_ROOT}`}>Back</Link>}
                    <div>
                        <button onClick={removeTrade}>
                            Delete
                        </button>
                    </div>
                </div>
                <div>
                    <b>{trade.paymentMethod}</b>
                    <div>{trade.buyer.name} +{trade.buyer.positiveReputation}/{trade.buyer.negativeReputation}</div>
                </div>
                <div>
                    {smallScreen && <Link to={`${PATH_DASHBOARD}/${trade.id}`}>Dashboard</Link>}
                </div>
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
