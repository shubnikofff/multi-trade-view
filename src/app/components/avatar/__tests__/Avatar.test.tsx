import React from 'react';

import { shallow } from 'enzyme';

import Avatar from '@components/avatar';

describe('Component Avatar', () => {
    const wrapper = shallow(<Avatar url="some-url" />);

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
