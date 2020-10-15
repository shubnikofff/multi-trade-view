export type Trade = {
    buyerId: number;
    sellerId: number;
    amount: number;
    started: number;
    hash: string;
    paid: boolean;
    paymentMethod: string;
    messageIds: number[];
}
