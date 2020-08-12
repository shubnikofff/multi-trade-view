import { createSlice } from '@reduxjs/toolkit';

import { UserRole } from '../types/user';

const slice = createSlice({
    name: 'auth',
    initialState: UserRole.Seller,
    reducers: {
        switchUser: state => state === UserRole.Seller ? UserRole.Buyer : UserRole.Seller,
    }
});

const { actions, reducer } = slice;

export {
    actions,
    reducer,
}
