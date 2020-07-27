import React from 'react';

import { useTradeDashboard } from './useTradeDashboard';

interface TradeDashboardProps {
}

function TradeDashboard() {
    const { trade } = useTradeDashboard();

    return (
        <div>
            <div>You are trading with <b>{trade.buyer.name}</b></div>
            <div>Started {trade.started.toLocaleString()}</div>
            <div><button>Release bitcoins</button></div>
        </div>
    );
}

export default React.memo<TradeDashboardProps>(TradeDashboard);
