import React from 'react';

import { useDashboard } from './useDashboard';

interface DashboardProps {
    smallScreen?: boolean;
}

function Dashboard({ smallScreen }: DashboardProps) {
    const { trade, releaseBitcoins } = useDashboard();

    if (!trade) {
        return null;
    }

    return (
        <div>
            <div>You are trading with <b>{trade.buyer.name}</b></div>
            <div>Started {trade.started.toLocaleString()}</div>
            <div>{`Status: ${trade.paid ? 'Paid' : 'Not Paid'}`}</div>
            <div>
                <button
                    disabled={trade.paid}
                    onClick={releaseBitcoins}
                >
                    Release bitcoins
                </button>
            </div>
        </div>
    );
}

export default React.memo<DashboardProps>(Dashboard);
