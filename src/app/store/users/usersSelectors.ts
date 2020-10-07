import { createEntityAdapter } from '@reduxjs/toolkit';

import { RootState } from '@type/Store';
import { User } from '@type/User';

const userAdapter = createEntityAdapter<User>();

export default userAdapter.getSelectors<RootState>(state => state.users);
