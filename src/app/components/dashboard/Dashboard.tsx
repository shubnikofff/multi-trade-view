import React from 'react';

import { useDashboard } from './useDashboard';

import './Dashboard.scss';
import { Link } from 'react-router-dom';
import { PATH_CHAT } from '../../constants';

interface DashboardProps {
    smallScreen?: boolean;
}

function Dashboard({ smallScreen }: DashboardProps) {
    const { trade, releaseBitcoins } = useDashboard();

    if (!trade) {
        return null;
    }

    return (
        <div className="dashboard">
            <div>
                {smallScreen && <Link to={`${PATH_CHAT}/${trade.id}`}>Back</Link>}
            </div>
            <div>
                <span>You are trading with <b>{trade.buyer.name}</b></span>
            </div>
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
