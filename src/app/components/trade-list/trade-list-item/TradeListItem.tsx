import React from 'react';
import classNames from 'classnames';

import Avatar from "@components/avatar";

import { Trade } from "@type/Trade";

import { useTradeListItem } from "./useTradeListItem";

import './TradeListItem.scss';

type TradeListItemProps = {
    trade: Trade;
    isActive: boolean;
}

function TradeListItem({ trade, isActive }: TradeListItemProps) {
    const { buyer, convert } = useTradeListItem(trade);

    return (
        <div className={classNames('trade-list-item', { 'trade-list-item__active': isActive })}>
            <div className="trade-list-item__left-side">
                {/*<div className="text-secondary">*/}
                {/*    <span className={classNames('dot', chatDictionary[trade.chatId]?.hasUnreadMessages*/}
                {/*        ? 'dot_green'*/}
                {/*        : 'dot_gray')}*/}
                {/*    />*/}
                {/*</div>*/}
                <div className="trade-list-item__left-side__buyer">
                    <b>{`${buyer?.name} is buying`}</b>
                </div>
                <div>
                    <b>{trade.paymentMethod}</b>
                </div>
                <div className={classNames(
                    'trade-list-item__left-side',
                    { 'text-secondary': isActive },
                )}>
                    {`${trade.amount} USD (${convert(trade.amount).toFixed(8)} BTC)`}
                </div>
            </div>
            <div className="trade-list-item__right-side">
                <div>
                    <Avatar url={buyer?.avatarUrl}/>
                </div>
                <div className={classNames('trade-list-item__status', trade.paid
                    ? 'trade-list-item__status_green'
                    : 'trade-list-item__status_gray')}>
                    <b>{trade.paid ? 'Paid' : 'Not paid'}</b>
                </div>
            </div>
        </div>
    );
}

export default TradeListItem;
