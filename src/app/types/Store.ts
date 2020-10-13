import store from '@app/store'

import { TradeEntity } from '@type/Trade';
import { User, UserRoleEnum } from '@type/User';

type MessageInitialData = {
    id: number;
    sender: UserRoleEnum;
    sendTime: Date;
    text: string;
}

export type ChatInitialData = {
    id: number;
    hasUnreadMessages: boolean;
    messages: MessageInitialData[];
}

export type InitialData = {
    chats: ChatInitialData[],
    rate: number,
    trades: TradeEntity[],
    users: User[],
}

export type RootState = ReturnType<typeof store.getState>;
