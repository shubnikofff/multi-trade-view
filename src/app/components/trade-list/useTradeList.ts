import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectors as tradesSelectors } from '@store/trades';

import { RootState } from '@type/Store';
import { Trade } from '@type/Trade';
import { useAuth } from '@common/hooks';

export function useTradeList() {
    const { tradeId } = useParams();
    const { currentUserId } = useAuth();

    const trades = useSelector(tradesSelectors.selectAll);
    const currentTrade = useSelector<RootState, Trade | undefined>((state => tradesSelectors.selectById(state, tradeId)))

    const isAvailable = tradeId === undefined || currentUserId === currentTrade?.sellerId;

    return {
        isAvailable,
        selectedTradeId: tradeId,
        trades,
    };
}
