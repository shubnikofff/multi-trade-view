import React from 'react';

import './Avatar.scss';

interface AvatarProps {
    url: string;
}

function Avatar({ url }: AvatarProps) {
    return (
        <img src={url} className="avatar" alt="Avatar" />
    );
}

export default Avatar;
