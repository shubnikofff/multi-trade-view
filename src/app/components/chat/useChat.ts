import { useStore } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectors as chatSelectors } from '../../slices/chatsSlice';
import { selectors as tradeSelectors } from '../../slices/tradesSlice';
import { selectors as userSelectors } from '../../slices/usersSlice';

import { User } from '../../types/user';
import { Trade } from '../../types/trade';

function useChat() {
    const { tradeId } = useParams();

    const state = useStore().getState();

    const tradeEntity = tradeSelectors.selectById(state, tradeId);

    if (!tradeEntity) {
        return {};
    }

    const chat = chatSelectors.selectById(state, tradeEntity.chatId);
    const user = userSelectors.selectById(state, tradeEntity.buyerId) as User;

    const trade: Trade = {
        ...tradeEntity,
        buyer: user,
    }


    return {
        chat,
        trade,
    }
}

export { useChat }
