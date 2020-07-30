import { useDispatch, useSelector } from 'react-redux';

import { actions as authActions } from '../slices/authSlice';

import { RootState } from '../store';
import { UserRole } from '../types/user';

function useAuth() {
    const dispatch = useDispatch();

    const auth = useSelector<RootState, UserRole>(state => state.auth);

    const switchUser = () => dispatch(authActions.switchUser());

    return {
        auth,
        switchUser,
    }
}

export { useAuth }
