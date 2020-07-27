import { useParams } from 'react-router-dom';
import { useStore } from 'react-redux';

import { selectors as chatsSelectors } from '../../slices/chatsSlice';
import { selectors as tradeSelectors } from '../../slices/tradesSlice';
import { selectors as userSelectors } from '../../slices/usersSlice';

import { Chat } from '../../types/chat';
import { Trade, TradeEntity } from '../../types/trade';
import { User } from '../../types/user';

function useTradeDashboard() {
    const state = useStore().getState();
    const { tradeId } = useParams();

    const tradeEntity = tradeSelectors.selectById(state, tradeId) as TradeEntity;
    const chat = chatsSelectors.selectById(state, tradeEntity.chatId) as Chat;
    const user = userSelectors.selectById(state, tradeEntity.buyerId) as User;

    const trade: Trade = {
        ...tradeEntity,
        buyer: user,
        chat
    }

    return { trade }
}

export { useTradeDashboard }
