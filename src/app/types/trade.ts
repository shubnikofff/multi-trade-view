import { User } from './user';
import { Chat } from './chat';

export interface TradeEntity {
    id: number;
    buyerId: number;
    chatId: number;
    paymentMethod: string;
    amount: number;
    paid: boolean;
    hash: string;
    started: Date;
}

export interface Trade {
    id: number;
    buyer: User;
    chat: Chat;
    paymentMethod: string;
    amount: number;
    paid: boolean;
    hash: string;
    started: Date;
}
