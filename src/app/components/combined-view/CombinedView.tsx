import React from 'react';

import { useParams } from 'react-router-dom';

import Chat from '@components/chat';
import Dashboard from '@components/dashboard';
import TradeList from '@components/trade-list';

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
