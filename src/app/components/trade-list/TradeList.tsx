import React from 'react';

import { Link } from 'react-router-dom';
import NotAvailable from '@components/not-available';

import { UserRoleEnum } from '@type/User';

import { PATH_CHAT } from '@app/paths';

import { useTradeList } from './useTradeList';

import TradeListItem from './trade-list-item';

import './TradeList.scss';

function TradeList() {
    const {
        auth,
        selectedTradeId,
        trades,
    } = useTradeList();

    if (auth === UserRoleEnum.Buyer) {
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
