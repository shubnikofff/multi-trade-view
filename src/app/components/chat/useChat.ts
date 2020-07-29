import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { selectors as chatSelectors, actions as chatActions } from '../../slices/chatsSlice';
import { selectors as tradeSelectors, actions as tradeActions } from '../../slices/tradesSlice';
import { selectors as userSelectors } from '../../slices/usersSlice';

import { Chat } from '../../types/chat';
import { RootState } from '../../store';
import { Trade, TradeEntity } from '../../types/trade';
import { User } from '../../types/user';

import { PATH_ROOT } from '../../constants';

function useChat() {
    const { tradeId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const { chat, trade, tradeEntity } = useSelector<RootState, { trade?: Trade, chat?: Chat, tradeEntity?: TradeEntity }>(
        state => {
            const tradeEntity = tradeSelectors.selectById(state, tradeId);

            if (!tradeEntity) {
                return {};
            }

            const buyer = userSelectors.selectById(state, tradeEntity.buyerId) as User;
            const chat = chatSelectors.selectById(state, tradeEntity.chatId);
            const trade = { ...tradeEntity, buyer }

            return {
                chat,
                trade,
                tradeEntity,
            }
        }
    );

    const removeTrade = () => {
        if (tradeEntity) {
            dispatch(tradeActions.removeTrade(tradeEntity.id));
            dispatch(chatActions.removeChat(tradeEntity.chatId));
            history.push(PATH_ROOT);
        }
    }

    const setChatAsRead = () => {
        if (chat?.hasUnreadMessages) {
            dispatch(chatActions.updateChat({
                id: chat.id,
                changes: { hasUnreadMessages: false }
            }));
        }
    }

    return {
        chat,
        trade,
        removeTrade,
        setChatAsRead,
    }
}

export { useChat }
