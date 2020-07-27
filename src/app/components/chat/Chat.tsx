import React from 'react';

import { useChat } from './useChat';

import { Box } from '@material-ui/core';

interface ChatProps {
}

function Chat() {
    const { auth, messages } = useChat();

    return (
        <div>
            {messages.map((message, index) => (
                <Box m={1} key={index}>
                    <div>{message.text}</div>
                    <div>{message.sendTime.toLocaleString()}</div>
                    <div>{message.sender}</div>
                </Box>
            ))}
        </div>
    );
}

export default React.memo<ChatProps>(Chat);
