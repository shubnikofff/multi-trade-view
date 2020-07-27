import { useDispatch, useSelector } from 'react-redux';

import { actions as authActions } from '../../slices/authSlice';

import { RootState } from '../../store';

function useUserPanel() {
    const dispatch = useDispatch();

    const auth = useSelector<RootState>(state => state.auth);

    const switchUser = () => dispatch(authActions.switchUser());

    return {
        auth,
        switchUser,
    }
}

export { useUserPanel }
