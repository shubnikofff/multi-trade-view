import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initApp } from '@common/actions';

import { Chat } from '@type/Chat';
import { InitialData } from '@type/Store';

const chatAdapter = createEntityAdapter<Chat>();

const slice = createSlice({
    name: 'chats',
    initialState: chatAdapter.getInitialState(),
    reducers: {
        updateChat: chatAdapter.updateOne,
        removeChat: chatAdapter.removeOne,
    },
    extraReducers: {
        [initApp.type]: (state, { payload }: PayloadAction<InitialData>) => {
            chatAdapter.setAll(state, payload.chats);
        },
    }
});

export default slice;
