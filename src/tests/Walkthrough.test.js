import React from 'react';
import ReactDOM from 'react-dom';
import Walkthrough from '../components/Walkthrough';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import App from '../App';
import RecipeItem from '../components/RecipeItem';

Enzyme.configure({ adapter: new Adapter() })

// incorrect function assignment in the onClick method
// will still pass the tests.

test('the beer button is present', () => {
  const wrapper = mount(<App />)

  expect(wrapper.find('button').text).toContain("Linus's Lagom Hard Hitting Lager (NOT FOR KIDS)")

  
})