import { createEntityAdapter } from '@reduxjs/toolkit';

import { Chat } from '@type/Chat';
import { RootState } from '@type/Store';

const chatEntityAdapter = createEntityAdapter<Chat>();

export default chatEntityAdapter.getSelectors<RootState>(state => state.chats);
