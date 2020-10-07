import { createSlice } from '@reduxjs/toolkit';

import { UserRoleEnum } from '@type/User';

const slice = createSlice({
    name: 'auth',
    initialState: UserRoleEnum.Seller,
    reducers: {
        switchUser: state => state === UserRoleEnum.Seller ? UserRoleEnum.Buyer : UserRoleEnum.Seller,
    }
});

export default slice;
