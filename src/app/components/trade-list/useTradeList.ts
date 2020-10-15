import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '@common/hooks';

import { selectors as tradesSelectors } from '@store/trades';
import { selectors as usersSelectors } from '@store/users';

import { RootState } from '@type/Store';
import { Trade } from '@type/Trade';
import { User } from '@type/User';

export function useTradeList() {
    const { auth } = useAuth();
    const { tradeId } = useParams();

    const selectedTradeId = parseInt(tradeId);

    const trades = useSelector<RootState, Trade[]>(state => {
        const tradeEntities = tradesSelectors.selectAll(state);
        const userDictionary = usersSelectors.selectEntities(state);

        return tradeEntities.map(entity => ({
            ...entity,
            buyer: userDictionary[entity.buyerId] as User,
        }))
    });

    return {
        auth,
        selectedTradeId,
        trades,
    };
}
