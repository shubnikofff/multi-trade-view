import {useCallback} from "react";
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '@store/auth';

import { RootState } from '@type/Store';
import { UserRoleEnum } from '@type/User';

function useAuth() {
    const dispatch = useDispatch();

    const auth = useSelector<RootState, UserRoleEnum>(state => state.auth);

    const switchUser = useCallback(() => dispatch(actions.switchUser()), [dispatch]);

    return {
        auth,
        switchUser,
    }
}

export { useAuth }
