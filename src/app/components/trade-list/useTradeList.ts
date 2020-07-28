import { useSelector } from 'react-redux';

import { selectors as tradeSelectors } from '../../slices/tradesSlice';
import { selectors as userSelectors } from '../../slices/usersSlice';

import { RootState } from '../../store';
import { Trade } from '../../types/trade';
import { User } from '../../types/user';

function useTradeList() {
    const trades = useSelector<RootState, Trade[]>(state => {
        const tradeEntities = tradeSelectors.selectAll(state);
        const userDictionary = userSelectors.selectEntities(state);

        return tradeEntities.map(entity => ({
            ...entity,
            buyer: userDictionary[entity.buyerId] as User,
        }))
    });

    return { trades }
}

export { useTradeList }
