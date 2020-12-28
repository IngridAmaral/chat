import React from 'react';
import { shallow } from 'enzyme';
import InputMessage from './input-message/InputMessage';
import SendButton from './send-button/SendButton';
import Form from './Form';

const defaultProps = {
  handleInput() {},
  sendMessage() {},
  newMessage: ''
};

it('renders component', () => {
  shallow(<Form {...defaultProps} />);
});

it('should render InputMessage', () => {
  const wrapper = shallow(<Form {...defaultProps} />);

  expect(wrapper.find(InputMessage).exists()).toEqual(true);
});

it('should send the correct props to InputMessage', () => {
  const wrapper = shallow(<Form {...defaultProps} />);

  expect(wrapper.find(InputMessage).prop('handleInput')).toEqual(
    defaultProps.handleInput
  );
  expect(wrapper.find(InputMessage).prop('newMessage')).toEqual(
    defaultProps.newMessage
  );
});

it('should render SendButton', () => {
  const wrapper = shallow(<Form {...defaultProps} />);

  expect(wrapper.find(SendButton).exists()).toEqual(true);
});

it('should send the correct props to SendButton', () => {
  const wrapper = shallow(<Form {...defaultProps} />);

  expect(wrapper.find(SendButton).prop('sendMessage')).toEqual(
    defaultProps.sendMessage
  );
});
