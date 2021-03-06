import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '@type/Chat';
import { initApp } from '@common/actions';
import { InitialData } from '@type/Store';

const messageEntityAdapter = createEntityAdapter<Message>();

const slice = createSlice({
    name: 'messages',
    initialState: messageEntityAdapter.getInitialState(),
    reducers: {
        addMessage: messageEntityAdapter.addOne,
        removeMessage: messageEntityAdapter.removeOne,
    },
    extraReducers: {
        [initApp.type]: (state, { payload }: PayloadAction<InitialData>) => {
            messageEntityAdapter.setAll(state, payload.messages)
        }
    }
});

export default slice;
