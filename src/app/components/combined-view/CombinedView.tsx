import React from 'react';

import { useParams } from 'react-router-dom';

import Chat from '../chat';
import Dashboard from '../dashboard';
import TradeList from '../trade-list';

import './CombinedView.scss';

function CombinedView() {
    const { tradeId } = useParams();

    return (
        <div className="combined-view">
            <TradeList />
            {tradeId && <Chat />}
            {tradeId && <Dashboard />}
        </div>
    );
}

export default CombinedView;
