export type User = {
    id: number;
    name: string;
    avatarUrl: string;
    positiveReputation: number;
    negativeReputation: number;
}

export enum UserRoleEnum {
    Buyer = 'buyer',
    Seller = 'seller',
}
