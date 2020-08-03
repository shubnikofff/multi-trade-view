import faker from 'faker';

import { TradeEntity } from './types/trade';
import { Chat } from './types/chat';
import { User, UserRole } from './types/user';

const USERS_NUMBER = 3;
const TRADES_NUMBER = 4;
const MESSAGES_MAX_NUMBER = 10;

const users: User[] = Array.from({ length: USERS_NUMBER }, (_, index: number) => ({
    id: index + 1,
    avatarUrl: faker.image.avatar(),
    name: faker.name.firstName(),
    positiveReputation: faker.random.number({ min: 1, max: 100 }),
    negativeReputation: faker.random.number({ min: 1, max: 100 }),
    c: faker.random.number(100),
}));

const trades: TradeEntity[] = Array.from({ length: TRADES_NUMBER }, (_, index: number) => ({
    id: index + 1,
    chatId: index + 1,
    paymentMethod: faker.random.arrayElement(['Amazon Gift Card', 'iTunes Gift Card', 'PayPal']),
    paid: faker.random.boolean(),
    buyerId: faker.random.arrayElement(users.map(user => user.id)),
    amount: faker.random.number({ min: 10, max: 300 }),
    hash: faker.random.alphaNumeric(8),
    started: faker.date.recent(7),
}));

const chats: Chat[] = Array.from({ length: TRADES_NUMBER }, (_, index: number) => ({
    id: index + 1,
    hasUnreadMessages: faker.random.boolean(),
    messages: Array.from({ length: faker.random.number({ min: 1, max: MESSAGES_MAX_NUMBER }) }, () => ({
        sender: faker.random.arrayElement([UserRole.Seller, UserRole.Buyer]),
        sendTime: faker.date.between(trades[index].started, new Date()),
        text: faker.lorem.text(),
    })).sort((a, b) => a.sendTime.valueOf() - b.sendTime.valueOf()),
}));

const sellerAvatarUrl = 'https://s3.amazonaws.com/uifaces/faces/twitter/ssbb_me/128.jpg';

export {
    chats,
    sellerAvatarUrl,
    trades,
    users,
}
