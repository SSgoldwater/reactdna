import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../Home';

test(`Home adds`, () => {
  const home = shallow(<Home />);

  expect(home.find(`#count`).text()).toMatchSnapshot();

  console.log(home.find(`#count`).text());

  home.find(`#addButton`).simulate('click');

  expect(home.find(`#count`).text()).toMatchSnapshot();

  console.log(home.find(`#count`).text());
});
