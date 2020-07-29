import {
    configureStore,
    createSerializableStateInvariantMiddleware,
    isPlain,
} from '@reduxjs/toolkit';

import { reducer as authReducer } from './slices/authSlice';
import { reducer as chatsReducer } from './slices/chatsSlice';
import { reducer as rateReducer } from './slices/rateSlice';
import { reducer as tradesReducer } from './slices/tradesSlice';
import { reducer as usersReducer } from './slices/usersSlice';

const serializableMiddleware = createSerializableStateInvariantMiddleware({
    isSerializable: value => isPlain(value) || value instanceof Date,
})

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

export type RootState = ReturnType<typeof store.getState>

export default store;
