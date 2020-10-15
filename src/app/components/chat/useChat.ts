import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useAuth } from '@common/hooks';

import { selectors as tradesSelectors, actions as tradeActions } from '@store/trades';
import { selectors as usersSelectors } from '@store/users';

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
        // if (chat) {
        //     dispatch(chatActions.updateChat({
        //         id: chat.id,
        //         changes: {
        //             messages: [
        //                 ...chat.messages,
        //                 {
        //                     sender: auth,
        //                     sendTime: new Date(),
        //                     text,
        //                 }
        //             ],
        //         },
        //     }));
        // }
    }, []);
    //
    const removeTrade = useCallback(() => {
        if (trade) {
            dispatch(tradeActions.removeTrade(trade.id));
            history.push(PATH_ROOT);
        }
    }, [dispatch, trade, history]);
    //
    return {
        auth,
        buyer,
        removeTrade,
        sendMessage,
        trade,
    }
}

export { useChat }
