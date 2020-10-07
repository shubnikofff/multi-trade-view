import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import store from '@app/store';

import UserPanel from '@components/user-panel';

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
