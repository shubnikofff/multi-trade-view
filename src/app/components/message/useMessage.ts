import { useSelector } from 'react-redux';
import { useAuth } from '@common/hooks';
import { selectors } from '@store/messages';

import { RootState } from '@type/Store';
import { Message } from '@type/Chat';

export function useMessage(id: number) {
    const { auth } = useAuth()
    const message = useSelector<RootState, Message | undefined>((state => selectors.selectById(state, id)));

    return {
        auth,
        message,
    }
}
