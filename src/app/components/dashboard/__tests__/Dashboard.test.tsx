import React from 'react';

import { mount } from 'enzyme';
import { createMemoryHistory } from 'history'

import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom'
import Dashboard from '../Dashboard';

import { store } from '../../../mockStore';
import { PATH_DASHBOARD } from '../../../paths';

describe('Component Dashboard', () => {
    const history = createMemoryHistory({
        initialEntries: [`${PATH_DASHBOARD}/1`],
        keyLength: 0,
    });

    const wrapper = mount(
        <Provider store={store}>
            <Router history={history}>
                <Route path={`${PATH_DASHBOARD}/:tradeId`}>
                    <Dashboard />
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

    it('should trigger action updateTrade with paid true payload', () => {
        const expectedAction = {
            payload: { changes: { paid: true }, id: '1' },
            type: "trades/updateTrade",
        }

        wrapper.find('button').simulate('click');
        expect(store.getActions()).toEqual(expect.arrayContaining([expectedAction]));
    });
});
