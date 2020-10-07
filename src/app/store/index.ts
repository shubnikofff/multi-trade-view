import {
    configureStore,
    createSerializableStateInvariantMiddleware,
    isPlain,
} from '@reduxjs/toolkit';

import { reducer as authReducer } from './auth';
import { reducer as chatsReducer } from './chats';
import { reducer as rateReducer } from './rate';
import { reducer as tradesReducer } from './trades';
import { reducer as usersReducer } from './users';

const serializableMiddleware = createSerializableStateInvariantMiddleware({
    isSerializable: value => isPlain(value) || value instanceof Date,
});

const store = configureStore({
    reducer: {
        auth: authReducer,
        chats: chatsReducer,
        rate: rateReducer,
        trades: tradesReducer,
        users: usersReducer,
    },
    middleware: [serializableMiddleware],
});

export default store;
