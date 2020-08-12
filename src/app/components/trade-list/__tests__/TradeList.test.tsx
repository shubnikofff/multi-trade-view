import React from 'react';

import { mount } from 'enzyme';
import { store } from '../../../mockStore';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import TradeList from '../TradeList';

describe('Component TradeList', () => {
    const wrapper = mount(
        <Provider store={store}>
            <BrowserRouter>
                <TradeList />
            </BrowserRouter>
        </Provider>
    );

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
