import { useSelector } from 'react-redux';
import { useAuth } from '@common/hooks';
import { selectors } from '@store/messages';

import { RootState } from '@type/Store';
import { Message } from '@type/Chat';
import { User } from "@type/User";
import { selectors as usersSelectors } from "@store/users";

export function useMessage(id: number) {
    const { currentUserId } = useAuth();
    const message = useSelector<RootState, Message | undefined>((state => selectors.selectById(state, id)));
    const sender = useSelector<RootState, User | undefined>(state => usersSelectors.selectById(state, message?.senderId || NaN));

    return {
        currentUserId,
        sender,
        message,
    }
}
