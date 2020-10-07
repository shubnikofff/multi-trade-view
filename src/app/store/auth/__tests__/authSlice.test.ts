import { actions, reducer } from '@store/auth';

import { UserRoleEnum } from '@type/User';

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
            expect(reducer(undefined, { type: undefined })).toEqual(UserRoleEnum.Seller);
        });

        it('should handle switchUser action', () => {
            expect(reducer(UserRoleEnum.Seller, actions.switchUser)).toEqual(UserRoleEnum.Buyer);
        });
    });
});
