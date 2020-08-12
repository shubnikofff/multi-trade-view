import { actions, reducer } from '../authSlice';

import { UserRole } from '../../types/user';

describe('authSlice', () => {
    describe('actions', () => {
        it('should create action switchUser', () => {
            expect(actions.switchUser()).toEqual({
                payload: undefined,
                type: 'auth/switchUser',
            });
        });
    });

    describe('reducer', () => {
        it('should return initial state', () => {
            expect(reducer(undefined, { type: undefined })).toEqual(UserRole.Seller);
        });

        it('should handle switchUser action', () => {
            expect(reducer(UserRole.Seller, actions.switchUser)).toEqual(UserRole.Buyer);
        });
    });
});
