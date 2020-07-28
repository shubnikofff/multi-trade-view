import { useDispatch, useStore } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { selectors as chatSelectors, actions as chatActions } from '../../slices/chatsSlice';
import { selectors as tradeSelectors, actions as tradeActions } from '../../slices/tradesSlice';
import { selectors as userSelectors } from '../../slices/usersSlice';

import { User } from '../../types/user';
import { Trade } from '../../types/trade';

import { PATH_ROOT } from '../../constants';

function useChat() {
    const { tradeId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
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

    const removeTrade = () => {
        dispatch(tradeActions.removeTrade(tradeEntity.id));
        dispatch(chatActions.removeChat(tradeEntity.chatId));
        history.push(PATH_ROOT);
    }

    return {
        chat,
        trade,
        removeTrade,
    }
}

export { useChat }
