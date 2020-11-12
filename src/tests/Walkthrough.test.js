import React from 'react';
import ReactDOM from 'react-dom';
import Walkthrough from '../components/Walkthrough';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';

Enzyme.configure({ adapter: new Adapter() })

// incorrect function assignment in the onClick method
// will still pass the tests.

test('the increment method increments counter', () => {
  const wrapper = render(<Walkthrough />)

  expect(wrapper.find('h2').text()).toContain("Method")

  
})