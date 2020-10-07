import { User } from '@type/User';

export type TradeEntity = {
    id: number;
    buyerId: number;
    chatId: number;
    paymentMethod: string;
    amount: number;
    paid: boolean;
    hash: string;
    started: Date;
}

export type Trade = {
    id: number;
    buyer: User;
    chatId: number;
    paymentMethod: string;
    amount: number;
    paid: boolean;
    hash: string;
    started: Date;
}
