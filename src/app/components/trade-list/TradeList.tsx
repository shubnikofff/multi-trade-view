import React from 'react';

import { Link } from 'react-router-dom';

import { useTradeList } from './useTradeList';
import { PATH_CHAT } from '../../constants';

import './TradeList.scss';

function TradeList() {

    const { trades } = useTradeList();

    return (
        <div className="trade-list">
            {trades.map(trade => (
                <div className="trade-list__item" key={trade.id}>
                    <Link to={`${PATH_CHAT}/${trade.id}`} key={trade.id}>
                        <div>{`${trade.buyer.name} is buying`}</div>
                        <img src={trade.buyer.avatarUrl} alt={trade.buyer.name} style={{borderRadius: "50%", width: "50px"}}/>
                        <div><b>{trade.paymentMethod}</b></div>
                        <div>{trade.amount} USD</div>
                        <div>{`Status: ${trade.paid ? 'Paid' : 'Not Paid'}`}</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default TradeList;
