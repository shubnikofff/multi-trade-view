import React from 'react';

import { mount } from 'enzyme';
import { store } from '../../../moockStore';

import CombinedView from '../CombinedView';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

describe('Component CombinedView', () => {
    const wrapper = mount(
        <Provider store={store}>
            <BrowserRouter>
                <CombinedView />
            </BrowserRouter>
        </Provider>
    );

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
