import React from 'react';

import { useDashboard } from './useDashboard';

function Dashboard() {
    // const { trade } = useTradeDashboard();

    return (
        <div>
            {/*<div>You are trading with <b>{trade.buyer.name}</b></div>*/}
            {/*<div>Started {trade.started.toLocaleString()}</div>*/}
            <div><button>Release bitcoins</button></div>
        </div>
    );
}

export default Dashboard;
