import { useParams } from 'react-router-dom';
import { useStore } from 'react-redux';

import { selectors as tradeSelectors } from '../../slices/tradesSlice';
import { selectors as userSelectors } from '../../slices/usersSlice';

import { Trade } from '../../types/trade';
import { User } from '../../types/user';

function useDashboard() {
    const state = useStore().getState();
    const { tradeId } = useParams();

    const tradeEntity = tradeSelectors.selectById(state, tradeId);

    if(!tradeEntity) {
        return {}
    }

    const user = userSelectors.selectById(state, tradeEntity.buyerId) as User;

    const trade: Trade = {
        ...tradeEntity,
        buyer: user,
    }

    return { trade }
}

export { useDashboard }
