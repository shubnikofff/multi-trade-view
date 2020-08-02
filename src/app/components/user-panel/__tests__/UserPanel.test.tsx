import React from 'react';

import store from '../../../store';
import { mount } from 'enzyme';

import { Provider } from 'react-redux';
import UserPanel from '../UserPanel';

describe('Component UserPanel', () => {
    const wrapper = mount(
        <Provider store={store}>
            <UserPanel />
        </Provider>
    );

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should switch user to buyer', () => {
        wrapper.find('button').simulate('click');

        expect(wrapper).toMatchSnapshot();
    });
});
