import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';
import convertTimestamp from '../../../utils/convertTimestamp';
import { message } from './data-test';

const defaultProps = {
  isUser: true,
  messageData: message
};

it('renders component', () => {
  shallow(<Message {...defaultProps} />);
});

it('rerenders the correct message', () => {
  const wrapper = shallow(<Message {...defaultProps} />);

  expect(wrapper.find('.message-text').text()).toBe(
    defaultProps.messageData.message
  );
});

it('rerenders the correct timestamp', () => {
  const wrapper = shallow(<Message {...defaultProps} />);
  const date = convertTimestamp(defaultProps.messageData.timestamp);

  expect(wrapper.find('.message-timestamp').text()).toBe(`${date}`);
});

describe('if !isUser', () => {
  it('rerenders the correct author', () => {
    const wrapper = shallow(<Message {...defaultProps} isUser={false} />);

    expect(wrapper.find('.message-author').text()).toBe(
      defaultProps.messageData.author
    );
  });
});

describe('if isUser', () => {
  it('does not render an author', () => {
    const wrapper = shallow(<Message {...defaultProps} isUser />);

    expect(wrapper.find('.message-author').exists()).toBe(false);
  });
});
