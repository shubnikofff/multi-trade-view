import React from 'react';
import classNames from 'classnames';

import { Link } from 'react-router-dom';

import { useChat } from './useChat';

import { PATH_DASHBOARD, PATH_ROOT } from '../../constants';

import { UserRole } from '../../types/user';
import { Avatar } from '../avatar/Avatar';

import './Chat.scss';

interface ChatProps {
    smallScreen?: boolean,
}

function Chat({ smallScreen }: ChatProps) {
    const { auth, chat, trade, removeTrade, sellerAvatarUrl } = useChat();

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
                        <button
                            onClick={removeTrade}
                            disabled={auth === UserRole.Buyer}
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div>
                    <b>{trade.paymentMethod}</b>
                    <div>{trade.buyer.name} +{trade.buyer.positiveReputation}/-{trade.buyer.negativeReputation}</div>
                </div>
                <div>
                    {smallScreen && <Link to={`${PATH_DASHBOARD}/${trade.id}`}>Dashboard</Link>}
                </div>
            </div>
            <div className="chat__body">
                {chat && chat.messages.map((message, index) => (
                    <div
                        className={classNames('chat__message', { 'chat__message_reversed': message.sender !== auth })}
                        key={index}
                    >
                        <div className="chat__message__avatar">
                            <Avatar
                                url={message.sender === UserRole.Seller ? sellerAvatarUrl : trade?.buyer.avatarUrl}
                            />
                        </div>
                        <div>
                            <div className={classNames(
                                'chat__message__text',
                                message.sender === auth ? 'chat__message__text_outgoing' : 'chat__message__text_incoming'
                            )}>
                                {message.text}
                            </div>
                            <div className={classNames('chat__message__date', { 'chat__message__date_align-right': message.sender !== auth })}>
                                {message.sendTime.toLocaleString()}
                            </div>
                        </div>
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
