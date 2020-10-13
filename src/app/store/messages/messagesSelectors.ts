import { createEntityAdapter } from '@reduxjs/toolkit';
import { Message } from '@type/Chat';
import { RootState } from '@type/Store';

const messagesEntityAdapter = createEntityAdapter<Message>();

export default messagesEntityAdapter.getSelectors<RootState>(state => state.messages);
