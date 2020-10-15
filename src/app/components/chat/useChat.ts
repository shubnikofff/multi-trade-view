import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useAuth } from '@common/hooks';

import { selectors as tradesSelectors, actions as tradesActions } from '@store/trades';
import { selectors as usersSelectors } from '@store/users';
import { selectors as messagesSelectors, actions as messagesActions } from '@store/messages';

import { RootState } from '@type/Store';
import { Trade } from '@type/Trade';
import { User } from '@type/User';

import { PATH_ROOT } from '@app/paths';

function useChat() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { auth } = useAuth();
    const { tradeId } = useParams();

    const trade = useSelector<RootState, Trade | undefined>(state => tradesSelectors.selectById(state, tradeId));
    const buyer = useSelector<RootState, User | undefined>(state => usersSelectors.selectById(state, trade?.buyerId || NaN));
    const currentUserId = useSelector<RootState, number>(state => usersSelectors.selectCurrentUserId(state));
    const messagesCount = useSelector<RootState, number>(state => messagesSelectors.selectTotal(state));

    // useEffect(() => {
    //     if (chat?.hasUnreadMessages) {
    //         dispatch(chatActions.updateChat({
    //             id: chat.id,
    //             changes: { hasUnreadMessages: false }
    //         }));
    //     }
    // }, [chat, dispatch]);
    //
    const sendMessage = useCallback((text: string) => {
        const messageId = messagesCount + 1;

        dispatch(messagesActions.addMessage({
            id: messageId,
            senderId: currentUserId,
            sendTime: new Date().getTime(),
            text,
        }));

        dispatch(tradesActions.updateTrade({
            id: trade?.hash || '',
            changes: {
                messageIds: [...(trade?.messageIds || []), messageId]
            }
        }));
    }, [currentUserId, dispatch, messagesCount, trade]);

    const removeTrade = useCallback(() => {
        if (trade) {
            dispatch(tradesActions.removeTrade(trade.hash));
            history.push(PATH_ROOT);
        }
    }, [dispatch, trade, history]);

    return {
        auth,
        buyer,
        removeTrade,
        sendMessage,
        trade,
    }
}

export { useChat }
