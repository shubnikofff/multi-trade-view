import React from 'react';
import classNames from 'classnames';
import Avatar from '@components/avatar';
import { useMessage } from '@components/message/useMessage';
import { currentUserId } from '@app/initialData';

import './Message.scss';

type MessageProps = {
    id: number;
}

function Message({ id }: MessageProps) {
    const { sender, message } = useMessage(id);

    return message ? (
        <div
            className={classNames('message', {
                'message_reversed': sender?.id !== currentUserId,
            })}
        >
            <div className="message__avatar">
                <Avatar url={sender?.avatarUrl} />
            </div>
            <div>
                <div className={classNames('message__text', sender?.id === currentUserId
                    ? 'message__text_outgoing'
                    : 'message__text_incoming'
                )}>
                    {message.text}
                </div>
                <div className={classNames('message__date', {
                    'message__date_align-right': sender?.id !== currentUserId,
                })}>
                    {new Date(message.sendTime).toLocaleString()}
                </div>
            </div>
        </div>
    ) : null;
}

export default Message;
