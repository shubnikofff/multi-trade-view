import React from 'react';
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import Avatar from '../avatar';

import { UserRole } from '../../types/user';
import { useTradeList } from './useTradeList';

import { PATH_CHAT } from '../../constants';

import './TradeList.scss';

function TradeList() {
    const {
        auth,
        chatDictionary,
        convert,
        selectedTradeId,
        trades,
    } = useTradeList();

    if (auth === UserRole.Buyer) {
        return (
            <div>Not available for this user</div>
        )
    }

    return (
        <div className="trade-list">
            {trades.map(trade => (
                <div
                    className={classNames('trade-list__item', { 'trade-list__item_active': trade.id === selectedTradeId })}
                    key={trade.id}
                >
                    <Link to={`${PATH_CHAT}/${trade.id}`} key={trade.id}>
                        <span className={classNames('dot', chatDictionary[trade.chatId]?.hasUnreadMessages
                            ? 'dot_green'
                            : 'dot_gray')}
                        />
                        <div>{`${trade.buyer.name} is buying`}</div>
                        <Avatar url={trade.buyer.avatarUrl} />
                        <div><b>{trade.paymentMethod}</b></div>
                        <div>{trade.amount} USD ({convert(trade.amount).toFixed(8)} BTC)</div>
                        <div>{`Status: ${trade.paid ? 'Paid' : 'Not Paid'}`}</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default TradeList;
