import React from 'react';

import Chat from '../chat';
import Dashboard from '../dashboard';
import TradeList from '../trade-list';

import './CombinedView.scss';

function CombinedView() {
    return(
        <div className="combined-view">
            <TradeList />
            <Chat />
            <Dashboard />
        </div>
    );
}

export default CombinedView;
