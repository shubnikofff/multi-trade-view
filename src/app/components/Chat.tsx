import React from 'react';

interface ChatProps {
}

function Chat() {
    return (
        <div>Chat</div>
    );
}

export default React.memo<ChatProps>(Chat);
