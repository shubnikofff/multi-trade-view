import { useSelector } from 'react-redux';

import { selectors as tradesSelectors } from '../../slices/tradesSlice';
import { selectors as usersSelectors } from '../../slices/usersSlice';

import { Trade } from '../../types/trade';
import { User } from '../../types/user';

function useTradeList() {
    const trades = useSelector(tradesSelectors.selectAll);
    const users = useSelector(usersSelectors.selectEntities);

    const items: Trade[] = trades.map(trade => ({
        ...trade,
        buyer: users[trade.buyerId] as User,
    }));

    return { items }
}

export { useTradeList }
