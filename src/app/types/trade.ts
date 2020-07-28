import { User } from './user';

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
    paymentMethod: string;
    amount: number;
    paid: boolean;
    hash: string;
    started: Date;
}
