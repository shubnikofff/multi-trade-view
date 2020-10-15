import { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '@store/auth';
import { selectors as usersSelectors } from '@store/users';

import { RootState } from '@type/Store';
import { UserRoleEnum } from '@type/User';

function useAuth() {
    const dispatch = useDispatch();

    const auth = useSelector<RootState, UserRoleEnum>(state => state.auth);
    const currentUserId = useSelector<RootState, number>(state => usersSelectors.selectCurrentUserId(state));

    const switchUser = useCallback(() => dispatch(actions.switchUser()), [dispatch]);

    return {
        auth,
        currentUserId,
        switchUser,
    }
}

export { useAuth }
