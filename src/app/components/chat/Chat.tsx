import React from 'react';

import { useChat } from './useChat';

import { Box } from '@material-ui/core';

function Chat() {
    const { auth, chat } = useChat();

    if(!chat) {
        return null;
    }

    return (
        <div>
            {chat.messages.map((message, index) => (
                <Box m={1} key={index}>
                    <div>{message.text}</div>
                    <div>{message.sendTime.toLocaleString()}</div>
                    <div>{message.sender}</div>
                </Box>
            ))}
        </div>
    );
}

export default Chat;
