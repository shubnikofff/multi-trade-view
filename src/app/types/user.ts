export interface User {
    id: number;
    name: string;
    avatarUrl: string;
    positiveReputation: number;
    negativeReputation: number;
}

export enum UserRole {
    Buyer = 'buyer',
    Seller = 'seller',
}
