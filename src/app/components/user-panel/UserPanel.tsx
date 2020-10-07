import React from 'react';

import { useAuth } from '@hooks';

import './UserPanel.scss';

function UserPanel() {
    const { auth, switchUser } = useAuth()

    return (
        <div className="user-panel">
            <div>
                <span>You are <b>{auth}</b></span>
            </div>
            <div>
                <button className="btn btn-outline" onClick={switchUser}>
                    Switch user
                </button>
            </div>
        </div>
    );
}

export default UserPanel;
