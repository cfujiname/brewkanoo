import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecipesButton from '../components/RecipesButton';
import Walkthrough from '../components/Walkthrough';


Enzyme.configure({ adapter: new Adapter() })

// // incorrect function assignment in the onClick method
// // will still pass the tests.

// // test('the beer button is present', () => {
// //   const wrapper = mount(<App />)

// //   expect(wrapper.find('button').text).toContain("Linus's Lagom Hard Hitting Lager (NOT FOR KIDS)")

  
// // })


