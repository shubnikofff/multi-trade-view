import { actions, reducer } from '../chatsSlice';

import { chats } from '../../initialData';

describe('chatSlice', () => {
    const chat = chats[0];

    describe('actions', () => {
        it('should create action updateChat', () => {
            const payload = {
                id: chat.id,
                changes: { hasUnreadMessages: false }
            }

            expect(actions.updateChat(payload)).toEqual({
                payload,
                type: 'chats/updateChat',
            })
        });

        it('should create action removeChat', () => {
            const payload = chat.id;

            expect(actions.removeChat(payload)).toEqual({
                payload,
                type: 'chats/removeChat',
            })
        });
    });

    describe('reducer', () => {
        const initialState = { ids: [chat.id], entities: { [chat.id]: chat } };

        it('should handle updateChat action', () => {
            const actionPayload = { id: chat.id, changes: { hasUnreadMessages: false } }

            expect(reducer(initialState, actions.updateChat(actionPayload))).toEqual({
                ...initialState,
                entities: {
                    [chat.id]: {
                        ...chat,
                        hasUnreadMessages: false,
                    }
                },
            });
        });

        it('should handle removeChat action', () => {
            expect(reducer(initialState, actions.removeChat(chat.id))).toEqual({
                ids: [],
                entities: {},
            })
        });
    });
});
