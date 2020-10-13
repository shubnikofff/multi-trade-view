import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initApp } from '@common/actions';

import { Chat } from '@type/Chat';
import { InitialData } from '@type/Store';

const chatEntityAdapter = createEntityAdapter<Chat>();

const slice = createSlice({
    name: 'chats',
    initialState: chatEntityAdapter.getInitialState(),
    reducers: {
        updateChat: chatEntityAdapter.updateOne,
        removeChat: chatEntityAdapter.removeOne,
    },
    extraReducers: {
        [initApp.type]: (state, { payload }: PayloadAction<InitialData>) => {
            chatEntityAdapter.setAll(state, payload.chats.map(chat => ({
                ...chat,
                messages: chat.messages.map(message => message.id)
            })));
        },
    }
});

export default slice;
