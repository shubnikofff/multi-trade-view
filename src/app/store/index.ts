import { configureStore } from '@reduxjs/toolkit';

import { reducer as messagesReducer } from './messages';
import { reducer as tradesReducer } from './trades';
import { reducer as usersReducer } from './users';

const store = configureStore({
    reducer: {
        messages: messagesReducer,
        trades: tradesReducer,
        users: usersReducer,
    },
});

export default store;
