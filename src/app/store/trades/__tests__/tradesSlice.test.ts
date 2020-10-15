import { actions, reducer } from '@store/trades';

import { trades } from '@app/initialData';

describe('tradesSlice', () => {
    const trade = trades[0];

    describe('actions', () => {
        it('should create action updateTrade', () => {
            const payload = {
                id: trade.hash,
                changes: { paid: true }
            };

            expect(actions.updateTrade(payload)).toEqual({
                payload,
                type: 'trades/updateTrade',
            });
        });

        it('should create action removeTrade', () => {
            const payload = trade.hash;

            expect(actions.removeTrade(payload)).toEqual({
                payload,
                type: 'trades/removeTrade',
            })
        });
    });

    describe('reducer', () => {
        const initialState = { ids: [trade.hash], entities: { [trade.hash]: trade } };

        it('should handle updateTrade action', () => {
            const actionPayload = { id: trade.hash, changes: { paid: true } };

            expect(reducer(initialState, actions.updateTrade(actionPayload))).toEqual({
                ...initialState,
                entities: {
                    [trade.hash]: {
                        ...trade,
                        paid: true,
                    },
                },
            });
        });

        it('should handle removeTrade action', () => {
            expect(reducer(initialState, actions.removeTrade(trade.hash))).toEqual({
                ids: [],
                entities: {},
            });
        });
    });
});
