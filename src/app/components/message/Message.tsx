import React from 'react';
import classNames from 'classnames';
import Avatar from '@components/avatar';
import { useMessage } from '@components/message/useMessage';
import { sellerAvatarUrl } from '@app/initialData';

import { UserRoleEnum } from '@type/User';

import './Message.scss';

type MessageProps = {
    id: number;
}

function Message({ id }: MessageProps) {
    const { auth, message } = useMessage(id);

    return message ? (
        <div
            className={classNames('message', {
                'message_reversed': message.sender !== auth,
            })}
        >
            <div className="message__avatar">
                <Avatar url={message.sender === UserRoleEnum.Seller
                    ? sellerAvatarUrl
                    : sellerAvatarUrl
                } />
            </div>
            <div>
                <div className={classNames('message__text', message.sender === auth
                    ? 'message__text_outgoing'
                    : 'message__text_incoming'
                )}>
                    {message.text}
                </div>
                <div className={classNames('message__date', {
                    'message__date_align-right': message.sender !== auth,
                })}>
                    {message.sendTime.toLocaleString()}
                </div>
            </div>
        </div>
    ) : null;
}

export default Message;
