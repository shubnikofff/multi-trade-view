import {
    configureStore,
    createSerializableStateInvariantMiddleware,
    isPlain,
} from '@reduxjs/toolkit';

import { reducer as authReducer } from './auth';
import { reducer as chatsReducer } from './chats';
import { reducer as messagesReducer } from './messages';
import { reducer as tradesReducer } from './trades';
import { reducer as usersReducer } from './users';

const serializableMiddleware = createSerializableStateInvariantMiddleware({
    isSerializable: value => isPlain(value) || value instanceof Date,
});

const store = configureStore({
    reducer: {
        auth: authReducer,
        chats: chatsReducer,
        messages: messagesReducer,
        trades: tradesReducer,
        users: usersReducer,
    },
    middleware: [serializableMiddleware],
});

export default store;
