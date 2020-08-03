import React from 'react';

import { mount } from 'enzyme';
import { createMemoryHistory } from 'history'

import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom'
import Chat from '../Chat';

import { store } from '../../../mockStore';
import { PATH_CHAT } from '../../../constants';

describe('Component chat', () => {
    const history = createMemoryHistory({
        initialEntries: [`${PATH_CHAT}/1`],
        keyLength: 0,
    });

    const wrapper = mount(
        <Provider store={store}>
            <Router history={history}>
                <Route exact path={`${PATH_CHAT}/:tradeId`}>
                    <Chat />
                </Route>
            </Router>
        </Provider>
    );

    afterEach(() => {
        store.clearActions();
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should dispatch actions removeTrade and removeChat', () => {
        const expectedActions = [
            {
                payload: 1,
                type: "trades/removeTrade",
            },
            {
                payload: 1,
                type: "chats/removeChat",
            },
        ];

        wrapper.find('.chat__header__left-area button').simulate('click');
        expect(store.getActions()).toEqual(expect.arrayContaining(expectedActions));
    });
});
