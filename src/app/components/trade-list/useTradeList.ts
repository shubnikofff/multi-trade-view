import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRate } from '../../hooks';

import { selectors as chatSelectors } from '../../slices/chatsSlice';
import { selectors as tradeSelectors } from '../../slices/tradesSlice';
import { selectors as userSelectors } from '../../slices/usersSlice';

import { Chat } from '../../types/chat';
import { Dictionary } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Trade } from '../../types/trade';
import { User } from '../../types/user';

function useTradeList() {
    const { tradeId } = useParams();
    const { convert } = useRate();

    const selectedTradeId = parseInt(tradeId);

    const trades = useSelector<RootState, Trade[]>(state => {
        const tradeEntities = tradeSelectors.selectAll(state);
        const userDictionary = userSelectors.selectEntities(state);

        return tradeEntities.map(entity => ({
            ...entity,
            buyer: userDictionary[entity.buyerId] as User,
        }))
    });

    const chatDictionary = useSelector<RootState, Dictionary<Chat>>(state => chatSelectors.selectEntities(state));

    return {
        chatDictionary,
        convert,
        selectedTradeId,
        trades,
    };
}

export { useTradeList }
