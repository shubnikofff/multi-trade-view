import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { Chat } from '../types/chat';

import { chats } from '../initialData';

const chatAdapter = createEntityAdapter<Chat>();

const initialState = chatAdapter.setAll(chatAdapter.getInitialState(), chats);

const slice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        updateChat: chatAdapter.updateOne,
        removeChat: chatAdapter.removeOne,
    }
});

const { actions, reducer } = slice;

const selectors = chatAdapter.getSelectors<RootState>(state => state.chats);

export {
    actions,
    reducer,
    selectors,
}
