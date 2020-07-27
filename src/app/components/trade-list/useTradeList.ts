import { useSelector } from 'react-redux';

import { selectors as chatsSelectors } from '../../slices/chatsSlice';
import { selectors as tradesSelectors } from '../../slices/tradesSlice';
import { selectors as usersSelectors } from '../../slices/usersSlice';

import { Chat } from '../../types/chat';
import { Trade } from '../../types/trade';
import { User } from '../../types/user';

function useTradeList() {
    const chats = useSelector(chatsSelectors.selectEntities);
    const trades = useSelector(tradesSelectors.selectAll);
    const users = useSelector(usersSelectors.selectEntities);

    const items: Trade[] = trades.map(trade => ({
        ...trade,
        buyer: users[trade.buyerId] as User,
        chat: chats[trade.chatId] as Chat,
    }));

    return { items }
}

export { useTradeList }
