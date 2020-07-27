import React from 'react';

import { Avatar, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useTradeList } from './useTradeList';
import { PATH_CHAT } from '../../constants';

interface TradeListProps {
}

function TradeList() {

    const { items } = useTradeList();

    return (
        <Box height="100%" overflow="auto">
            {items.map(item => (
                <Link to={`${PATH_CHAT}/${item.id}`} key={item.id}>
                    <Box m={1}>
                        <div>{`${item.buyer.name} is buying`}</div>
                        <Avatar src={item.buyer.avatarUrl} alt={item.buyer.name} />
                        <div><b>{item.paymentMethod}</b></div>
                        <div>{item.amount} USD</div>
                    </Box>
                </Link>
            ))}
        </Box>
    );
}

export default React.memo<TradeListProps>(TradeList);
