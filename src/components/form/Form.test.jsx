import React from 'react';
import { shallow } from 'enzyme';
import InputMessage from './input-message/InputMessage';
import SendButton from './send-button/SendButton';
import Form from './Form';

it('renders component', () => {
  shallow(<Form />);
});

it('should render InputMessage', () => {
  const wrapper = shallow(<Form />);

  expect(wrapper.find(InputMessage).exists()).toBe(true);
});

it('should render SendButton', () => {
  const wrapper = shallow(<Form />);

  expect(wrapper.find(SendButton).exists()).toBe(true);
});
