import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actions as tradeActions, selectors as tradeSelectors } from '../../slices/tradesSlice';
import { selectors as userSelectors } from '../../slices/usersSlice';

import { RootState } from '../../store';
import { Trade } from '../../types/trade';
import { User } from '../../types/user';

function useDashboard() {
    const { tradeId } = useParams();

    const dispatch = useDispatch();

    const trade = useSelector<RootState, Trade | null>(state => {
        const entity = tradeSelectors.selectById(state, tradeId);

        if (!entity) {
            return null;
        }

        const buyer = userSelectors.selectById(state, entity.buyerId) as User;

        return { ...entity, buyer }
    });

    const releaseBitcoins = () => {
        dispatch(tradeActions.updateTrade({
            id: tradeId,
            changes: { paid: true },
        }));
    }

    return {
        trade,
        releaseBitcoins,
    }
}

export { useDashboard }
