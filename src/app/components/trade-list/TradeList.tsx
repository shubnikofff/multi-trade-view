import React from 'react';

import { Avatar, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useTradeList } from './useTradeList';
import { PATH_CHAT } from '../../constants';

import './TradeList.scss';

function TradeList() {

    const { items } = useTradeList();

    return (
        <div className="trade-list">
            {items.map(item => (
                <div className="trade-list__item">
                    <Link to={`${PATH_CHAT}/${item.id}`} key={item.id}>
                        <div>{`${item.buyer.name} is buying`}</div>
                        <Avatar src={item.buyer.avatarUrl} alt={item.buyer.name} />
                        <div><b>{item.paymentMethod}</b></div>
                        <div>{item.amount} USD</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default TradeList;
