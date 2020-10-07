import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth, useRate } from '@hooks';

import { selectors as chatsSelectors } from '@store/chats';
import { selectors as tradesSelectors } from '@store/trades';
import { selectors as usersSelectors } from '@store/users';

import { Chat } from '@type/Chat';
import { Dictionary } from '@reduxjs/toolkit';
import { RootState } from '@type/Store';
import { Trade } from '@type/Trade';
import { User } from '@type/User';

function useTradeList() {
    const { auth } = useAuth();
    const { tradeId } = useParams();
    const { convert } = useRate();

    const selectedTradeId = parseInt(tradeId);

    const trades = useSelector<RootState, Trade[]>(state => {
        const tradeEntities = tradesSelectors.selectAll(state);
        const userDictionary = usersSelectors.selectEntities(state);

        return tradeEntities.map(entity => ({
            ...entity,
            buyer: userDictionary[entity.buyerId] as User,
        }))
    });

    const chatDictionary = useSelector<RootState, Dictionary<Chat>>(state => chatsSelectors.selectEntities(state));

    return {
        auth,
        chatDictionary,
        convert,
        selectedTradeId,
        trades,
    };
}

export { useTradeList }
