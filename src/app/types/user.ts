export interface User {
    id: number;
    name: string;
    avatarUrl: string;
    positiveRate: number;
    negativeRate: number;
    ofTrades: number;
}

export enum UserRole {
    Buyer = 'buyer',
    Seller = 'seller',
}
