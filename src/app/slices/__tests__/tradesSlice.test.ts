import { actions, reducer } from '../tradesSlice';

import { trades } from '../../initialData';

describe('tradesSlice', () => {
    const trade = trades[0];

    describe('actions', () => {
        it('should create action updateTrade', () => {
            const payload = {
                id: trade.id,
                changes: { paid: true }
            };

            expect(actions.updateTrade(payload)).toEqual({
                payload,
                type: 'trades/updateTrade',
            });
        });

        it('should create action removeTrade', () => {
            const payload = trade.id;

            expect(actions.removeTrade(payload)).toEqual({
                payload,
                type: 'trades/removeTrade',
            })
        });
    });

    describe('reducer', () => {
        const initialState = { ids: [trade.id], entities: { [trade.id]: trade } };

        it('should handle updateTrade action', () => {
            const actionPayload = { id: trade.id, changes: { paid: true } };

            expect(reducer(initialState, actions.updateTrade(actionPayload))).toEqual({
                ...initialState,
                entities: {
                    [trade.id]: {
                        ...trade,
                        paid: true,
                    },
                },
            });
        });

        it('should handle removeTrade action', () => {
            expect(reducer(initialState, actions.removeTrade(trade.id))).toEqual({
                ids: [],
                entities: {},
            });
        });
    });
});
