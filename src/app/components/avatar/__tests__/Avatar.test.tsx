import React from 'react';

import { shallow } from 'enzyme';

import Avatar from '../Avatar';

describe('Component Avatar', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<Avatar url="some-url" />);

        expect(wrapper).toMatchSnapshot();
    });
});
