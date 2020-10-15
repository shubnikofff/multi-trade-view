import { useSelector } from 'react-redux';

import { selectors as usersSelectors } from '@store/users';

import { RootState } from '@type/Store';

function useAuth() {
    const currentUserId = useSelector<RootState, number>(state => usersSelectors.selectCurrentUserId(state));

    return {
        currentUserId,
    }
}

export { useAuth }
