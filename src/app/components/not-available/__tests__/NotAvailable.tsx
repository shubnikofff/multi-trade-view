import React from 'react';

import { shallow } from 'enzyme';

import NotAvailable from '../NotAvailable';

describe('Component NotAvailable', () => {
    const wrapper = shallow(
        <NotAvailable>
            Some message
        </NotAvailable>
    );

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
