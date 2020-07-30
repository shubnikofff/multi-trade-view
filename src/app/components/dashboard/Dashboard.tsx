import React from 'react';

import { useDashboard } from './useDashboard';

import { Link } from 'react-router-dom';

import { UserRole } from '../../types/user';

import { PATH_CHAT } from '../../constants';

import './Dashboard.scss';

interface DashboardProps {
    smallScreen?: boolean;
}

function Dashboard({ smallScreen }: DashboardProps) {
    const { auth, trade, releaseBitcoins } = useDashboard();

    if(auth === UserRole.Buyer) {
        return (
            <div>Not available for this user</div>
        )
    }

    if (!trade) {
        return (
            <div>No such trade</div>
        );
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
