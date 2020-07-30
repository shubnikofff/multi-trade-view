import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks';

import { selectors as chatSelectors, actions as chatActions } from '../../slices/chatsSlice';
import { selectors as tradeSelectors, actions as tradeActions } from '../../slices/tradesSlice';
import { selectors as userSelectors } from '../../slices/usersSlice';

import { Chat } from '../../types/chat';
import { RootState } from '../../store';
import { Trade, TradeEntity } from '../../types/trade';
import { User } from '../../types/user';

import { sellerAvatarUrl } from '../../initialData';
import { PATH_ROOT } from '../../constants';

function useChat() {
    const { auth } = useAuth();
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

    useEffect(() => {
        if (chat?.hasUnreadMessages) {
            dispatch(chatActions.updateChat({
                id: chat.id,
                changes: { hasUnreadMessages: false }
            }));
        }
    }, [chat, dispatch]);

    const sendMessage = (text: string) => {
        if (chat) {
            dispatch(chatActions.updateChat({
                id: chat.id,
                changes: {
                    messages: [
                        ...chat.messages,
                        {
                            sender: auth,
                            sendTime: new Date(),
                            text,
                        }
                    ],
                },
            }));
        }
    };

    const removeTrade = () => {
        if (tradeEntity) {
            dispatch(tradeActions.removeTrade(tradeEntity.id));
            dispatch(chatActions.removeChat(tradeEntity.chatId));
            history.push(PATH_ROOT);
        }
    };

    return {
        auth,
        chat,
        removeTrade,
        sellerAvatarUrl,
        sendMessage,
        trade,
    }
}

export { useChat }
