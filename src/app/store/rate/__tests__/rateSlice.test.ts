import { actions, reducer } from '@store/rate';

describe('rateSlice', () => {
    const payload = 11000;

    describe('actions', () => {
        it('should create action setRate', () => {
            expect(actions.setRate(payload)).toEqual({
                payload: payload,
                type: 'rate/setRate',
            });
        });
    });

    describe('reducer', () => {
        it('should handle setRate action', () => {
            expect(reducer(10000, actions.setRate(payload))).toEqual(payload);
        });
    });
});
