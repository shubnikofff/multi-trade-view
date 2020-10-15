import store from '@app/store'

import { Trade } from '@type/Trade';
import { User } from '@type/User';
import { Message } from "@type/Chat";

export type InitialData = {
    currentUserId: number;
    messages: Message[],
    rate: number;
    trades: Trade[];
    users: User[];
}

export type RootState = ReturnType<typeof store.getState>;
