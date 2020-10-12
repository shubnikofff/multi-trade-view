import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth, useRate } from '@common/hooks';

import { actions as tradeActions, selectors as tradeSelectors } from '@store/trades';
import { selectors as userSelectors } from '@store/users';

import { RootState } from '@type/Store';
import { Trade } from '@type/Trade';
import { User } from '@type/User';

function useDashboard() {
    const { auth } = useAuth();
    const { convert } = useRate();
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
        auth,
        convert,
        trade,
        releaseBitcoins,
    }
}

export { useDashboard }
