import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initApp } from '@common/actions';

import { User } from '@type/User';
import { InitialData } from '@type/Store';

const userAdapter = createEntityAdapter<User>();

const slice = createSlice({
    name: 'users',
    initialState: userAdapter.getInitialState(),
    reducers: {},
    extraReducers: {
        [initApp.type]: (state, { payload }: PayloadAction<InitialData>) => {
            userAdapter.setAll(state, payload.users);
        },
    }
});

export default slice;
