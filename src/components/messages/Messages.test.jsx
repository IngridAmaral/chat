import React from 'react';
import { mount } from 'enzyme';
import Messages from './Messages';
import Message from './message/Message';
import { message } from './message/data-test';

const defaultProps = {
  activeUser: 'Alice',
  error: false,
  messages: [message]
};

it('renders component', () => {
  Element.prototype.scrollIntoView = jest.fn(); // set scrollIntoView to a spy
  const wrapper = mount(<Messages {...defaultProps} />);

  expect(wrapper).toMatchSnapshot();
  expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
});

it('render the correct messages', () => {
  const wrapper = mount(<Messages {...defaultProps} />);

  expect(wrapper.find(Message).length).toEqual(defaultProps.messages.length);

  defaultProps.messages.forEach((msg, idx) => {
    const isUser = msg.author === defaultProps.activeUser;

    expect(wrapper.find(Message).at(idx).prop('messageData')).toEqual(msg);
    expect(wrapper.find(Message).at(idx).prop('isUser')).toEqual(isUser);
  });
});

it('render the correct div used as ref', () => {
  const wrapper = mount(<Messages {...defaultProps} />);

  expect(wrapper.find('#bottom').exists()).toEqual(true);
});
