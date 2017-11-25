import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../Home';

test(`Home adds and subtracts`, () => {
  const home = shallow(<Home />);
  expect(home.find(`#count`).text()).toMatchSnapshot();

  home.find(`#addButton`).simulate('click');
  expect(home.find(`#count`).text()).toMatchSnapshot();

  home.find(`#subtractButton`).simulate('click');
  expect(home.find(`#count`).text()).toMatchSnapshot();
});
