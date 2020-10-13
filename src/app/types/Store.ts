import store from '@app/store'

import { Chat } from '@type/Chat';
import { TradeEntity } from '@type/Trade';
import { User } from '@type/User';

export type InitialData = {
    chats: Chat[],
    rate: number,
    sellerAvatarUrl: string,
    trades: TradeEntity[],
    users: User[],
}

export type RootState = ReturnType<typeof store.getState>;
