import React from 'react';
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import Avatar from '@components/avatar';
import NotAvailable from '@components/not-available';

import { UserRoleEnum } from '@type/User';

import { PATH_CHAT } from '@app/paths';

import { useTradeList } from './useTradeList';

import './TradeList.scss';

function TradeList() {
    const {
        auth,
        chatDictionary,
        convert,
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
                <Link to={`${PATH_CHAT}/${trade.id}`} key={trade.id}>
                    <div
                        className={classNames('trade-list__item', { 'trade-list__item_active': trade.id === selectedTradeId })}
                        key={trade.id}
                    >
                        <div className="trade-list__item__left-side">
                            <div className="text-secondary">
                                <span className={classNames('dot', chatDictionary[trade.chatId]?.hasUnreadMessages
                                    ? 'dot_green'
                                    : 'dot_gray')}
                                />
                            </div>
                            <div>
                                <div className="trade-list__item__left-side__buyer">
                                    <b>{`${trade.buyer.name} is buying`}</b>
                                </div>
                                <div>
                                    <b>{trade.paymentMethod}</b>
                                </div>
                                <div className={classNames(
                                    'trade-list__item__left-side__amount',
                                    { 'text-secondary': trade.id !== selectedTradeId },
                                )}>
                                    {`${trade.amount} USD (${convert(trade.amount).toFixed(8)} BTC)`}
                                </div>
                            </div>
                        </div>
                        <div className="trade-list__item__right-side">
                            <div>
                                <Avatar url={trade.buyer.avatarUrl} />
                            </div>
                            <div className={classNames('trade-list__item__status', trade.paid
                                ? 'trade-list__item__status_green'
                                : 'trade-list__item__status_gray')}>
                                <b>{trade.paid ? 'Paid' : 'Not paid'}</b>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default TradeList;
