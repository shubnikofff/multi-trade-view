import faker from 'faker';

import { Trade } from '@type/Trade';
import { User } from '@type/User';
import { Message } from "@type/Chat";

const USERS_NUMBER = 5;
const TRADES_NUMBER = 10;
const MESSAGES_MAX_NUMBER = 10;

const users: User[] = Array.from({ length: USERS_NUMBER }, (_, index: number) => ({
    id: index + 1,
    avatarUrl: faker.image.avatar(),
    name: faker.name.firstName(),
    positiveReputation: faker.random.number({ min: 1, max: 100 }),
    negativeReputation: faker.random.number({ min: 1, max: 100 }),
}));
const userIds = users.map(user => user.id);
const currentUserId = faker.random.arrayElement(userIds);
const buyerIds = userIds.filter(id => id !== currentUserId);

const messages: Message[] = [];

const trades: Trade[] = Array.from({ length: TRADES_NUMBER }, (_, index: number) => {
    const buyerId = faker.random.arrayElement(buyerIds);
    const sellerId = currentUserId;
    const startedDate = faker.date.recent(7);

    const tradeMessages: Message[] = Array.from({ length: faker.random.number({ min: 1, max: MESSAGES_MAX_NUMBER }) }, (_, messageIndex) => ({
        id: index * MESSAGES_MAX_NUMBER + messageIndex + 1,
        senderId: faker.random.arrayElement([sellerId, buyerId]),
        sendTime: faker.date.between(startedDate, new Date()).getTime(),
        text: faker.lorem.text(),
    })).sort((a, b) => a.sendTime - b.sendTime);

    messages.push(...tradeMessages);

    return ({
        // id: index + 1,
        buyerId,
        sellerId,
        amount: faker.random.number({ min: 10, max: 300 }),
        started: startedDate.getTime(),
        hash: faker.random.alphaNumeric(8),
        paid: faker.random.boolean(),
        paymentMethod: faker.random.arrayElement(['Amazon Gift Card', 'iTunes Gift Card', 'PayPal']),
        messageIds: tradeMessages.map(message => message.id),
    });
});

const rate = 10000;

export {
    currentUserId,
    messages,
    rate,
    trades,
    users,
}
