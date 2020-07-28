import { useParams } from 'react-router-dom';
import { useDispatch, useStore } from 'react-redux';

import { actions as tradeActions, selectors as tradeSelectors } from '../../slices/tradesSlice';
import { selectors as userSelectors } from '../../slices/usersSlice';

import { Trade } from '../../types/trade';
import { User } from '../../types/user';

function useDashboard() {
    const dispatch = useDispatch();
    const state = useStore().getState();
    const { tradeId } = useParams();

    const tradeEntity = tradeSelectors.selectById(state, tradeId);

    if (!tradeEntity) {
        return {}
    }

    const user = userSelectors.selectById(state, tradeEntity.buyerId) as User;

    const trade: Trade = {
        ...tradeEntity,
        buyer: user,
    }

    const releaseBitcoins = () => {
        dispatch(tradeActions.updateTrade({
            id: tradeEntity.id,
            changes: { paid: true },
        }));
    }

    return {
        tradeEntity,
        trade,
        releaseBitcoins,
    }
}

export { useDashboard }
