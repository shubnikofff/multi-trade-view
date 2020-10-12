import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useAuth } from '@common/hooks';

import { selectors as chatSelectors, actions as chatActions } from '@store/chats';
import { selectors as tradeSelectors, actions as tradeActions } from '@store/trades';
import { selectors as userSelectors } from '@store/users';

import { Chat } from '@type/Chat';
import { RootState } from '@type/Store';
import { Trade, TradeEntity } from '@type/Trade';
import { User } from '@type/User';

import { PATH_ROOT } from '@app/paths';
import { sellerAvatarUrl } from '@app/initialData';

function useChat() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { auth } = useAuth();
    const { tradeId } = useParams();

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
