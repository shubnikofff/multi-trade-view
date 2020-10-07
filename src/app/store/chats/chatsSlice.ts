import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { chats } from '@app/initialData'

import { Chat } from '@type/Chat';

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

export default slice;
