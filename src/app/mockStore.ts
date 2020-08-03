import configureMockStore from 'redux-mock-store'
import { UserRole } from './types/user';

const mockStore = configureMockStore([]);

const store = mockStore({
    auth: UserRole.Seller,
    trades: {
        ids: [1, 2],
        entities: {
            1: {
                id: 1,
                chatId: 1,
                paymentMethod: 'Amazon Gift Card',
                paid: false,
                buyerId: 1,
                amount: 100,
                hash: 'abc42',
                started: new Date(2020, 8),
            },
            2: {
                id: 2,
                chatId: 2,
                paymentMethod: 'iTunes Gift Card',
                paid: true,
                buyerId: 1,
                amount: 150,
                hash: 'cd23e',
                started: new Date(2020, 8),
            }
        }
    },
    users: {
        ids: [1],
        entities: {
            1: {
                id: 1,
                avatarUrl: 'url',
                name: 'username',
                positiveReputation: 25,
                negativeReputation: 12,
                ofTrades: 4,
            }
        }
    },
    chats: {
        ids: [1, 2],
        entities: {
            1: {
                id: 1,
                hasUnreadMessages: false,
                messages: [
                    {
                        message: 'Message_1',
                        sender: UserRole.Buyer,
                        sendTime: new Date(2020, 8),
                    },
                    {
                        message: 'Message_2',
                        sender: UserRole.Seller,
                        sendTime: new Date(2020, 8),
                    }
                ],
            },
            2: {
                id: 2,
                hasUnreadMessages: false,
                messages: [
                    {
                        message: 'Message_1',
                        sender: UserRole.Buyer,
                        sendTime: new Date(2020, 8),
                    },
                    {
                        message: 'Message_2',
                        sender: UserRole.Seller,
                        sendTime: new Date(2020, 8),
                    }
                ],
            },
        },
    },
    rate: 10000,
});

export { store }
