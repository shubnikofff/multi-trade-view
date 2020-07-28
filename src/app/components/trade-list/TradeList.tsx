import React from 'react';

import { Link } from 'react-router-dom';

import { useTradeList } from './useTradeList';
import { PATH_CHAT } from '../../constants';

import './TradeList.scss';

function TradeList() {

    const { items } = useTradeList();

    return (
        <div className="trade-list">
            {items.map(item => (
                <div className="trade-list__item" key={item.id}>
                    <Link to={`${PATH_CHAT}/${item.id}`} key={item.id}>
                        <div>{`${item.buyer.name} is buying`}</div>
                        <img src={item.buyer.avatarUrl} alt={item.buyer.name} style={{borderRadius: "50%", width: "50px"}}/>
                        <div><b>{item.paymentMethod}</b></div>
                        <div>{item.amount} USD</div>
                        <div>{`Status: ${item.paid ? 'Paid' : 'Not Paid'}`}</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default TradeList;
