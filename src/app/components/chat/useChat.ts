import { useSelector, useDispatch, useStore } from 'react-redux';
import { useParams } from 'react-router-dom';

import { actions as authActions } from '../../slices/authSlice';
import { selectors as chatSelectors } from '../../slices/chatsSlice';

import { RootState } from '../../store';
import { Chat } from '../../types/chat';

function useChat() {
    const dispatch = useDispatch();
    const state = useStore().getState();

    const { tradeId } = useParams();

    const auth = useSelector<RootState>(state => state.auth);
    const chat = chatSelectors.selectById(state, tradeId) as Chat;

    const { messages } = chat;

    const switchUser = () => dispatch(authActions.switchUser());

    return {
        auth,
        messages,
        switchUser,
    }
}

export { useChat }
