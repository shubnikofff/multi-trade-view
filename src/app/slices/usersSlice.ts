import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { User } from '../types/user';

import { users } from '../initialData';

const userAdapter = createEntityAdapter<User>();

const initialState = userAdapter.setAll(userAdapter.getInitialState(), users);

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

const { reducer } = slice;

const selectors = userAdapter.getSelectors<RootState>(state => state.users);

export {
    reducer,
    selectors,
}
