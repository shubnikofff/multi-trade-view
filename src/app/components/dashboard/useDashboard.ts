import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth, useRate } from '@common/hooks';

import { actions as tradeActions, selectors as tradesSelectors } from '@store/trades';
import { selectors as usersSelectors } from '@store/users';

import { RootState } from '@type/Store';
import { Trade } from '@type/Trade';
import { User } from '@type/User';

function useDashboard() {
    const { auth } = useAuth();
    const { convert } = useRate();
    const { tradeId } = useParams();
    const dispatch = useDispatch();

    const trade = useSelector<RootState, Trade | undefined>(state => tradesSelectors.selectById(state, tradeId));
    const buyer = useSelector<RootState, User | undefined>(state => usersSelectors.selectById(state, trade?.buyerId || NaN));

    const releaseBitcoins = useCallback(() => {
        dispatch(tradeActions.updateTrade({
            id: tradeId,
            changes: { paid: true },
        }));
    }, [dispatch, tradeId]);

    return {
        auth,
        buyer,
        convert,
        trade,
        releaseBitcoins,
    }
}

export { useDashboard }
