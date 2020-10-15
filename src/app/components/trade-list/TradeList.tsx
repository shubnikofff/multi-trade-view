import React from 'react';

import { Link } from 'react-router-dom';
import NotAvailable from '@components/not-available';

import { PATH_CHAT } from '@app/paths';

import { useTradeList } from './useTradeList';

import TradeListItem from './trade-list-item';

import './TradeList.scss';

function TradeList() {
    const {
        isAvailable,
        selectedTradeId,
        trades,
    } = useTradeList();

    if (!isAvailable) {
        return (
            <NotAvailable>
                Not available for this user
            </NotAvailable>
        )
    }

    return (
        <div className="trade-list">
            {trades.map(trade => (
                <Link to={`${PATH_CHAT}/${trade.hash}`} key={trade.hash}>
                    <TradeListItem trade={trade} isActive={trade.hash === selectedTradeId} />
                </Link>
            ))}
        </div>
    );
}

export default TradeList;
