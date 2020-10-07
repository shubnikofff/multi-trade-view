import { createEntityAdapter } from '@reduxjs/toolkit';

import { Chat } from '@type/Chat';
import { RootState } from '@type/Store';

const chatAdapter = createEntityAdapter<Chat>();

export default  chatAdapter.getSelectors<RootState>(state => state.chats);
