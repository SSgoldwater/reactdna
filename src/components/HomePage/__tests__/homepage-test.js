import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../HomePage';

test(`Home adds and subtracts`, () => {
  const homePage = shallow(<HomePage />);
  expect(homePage.find(`#count`).text()).toMatchSnapshot();

  homePage.find(`#addButton`).simulate('click');
  expect(homePage.find(`#count`).text()).toMatchSnapshot();

  homePage.find(`#subtractButton`).simulate('click');
  expect(homePage.find(`#count`).text()).toMatchSnapshot();
});
