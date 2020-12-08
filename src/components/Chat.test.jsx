import React from 'react';
import { shallow } from 'enzyme';
import Messages from './messages/Messages';
import Form from './form/Form';
import Chat from './Chat';

it('renders component', () => {
  shallow(<Chat />);
});

it('should render Messages', () => {
  const wrapper = shallow(<Chat />);

  expect(wrapper.find(Messages).exists()).toBe(true);
});

it('should render Form', () => {
  const wrapper = shallow(<Chat />);

  expect(wrapper.find(Form).exists()).toBe(true);
});
