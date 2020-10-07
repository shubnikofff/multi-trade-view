import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { User } from '@type/User';

import { users } from '@app/initialData';

const userAdapter = createEntityAdapter<User>();

const initialState = userAdapter.setAll(userAdapter.getInitialState(), users);

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export default slice;
