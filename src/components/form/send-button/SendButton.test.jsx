import React from 'react';
import { shallow } from 'enzyme';
import SendButton from './SendButton';

const defaultProps = {
  sendMessage() {}
};

it('renders component', () => {
  shallow(<SendButton {...defaultProps} />);
});

it('should call function on click', () => {
  const click = jest.fn();
  const wrapper = shallow(<SendButton {...defaultProps} sendMessage={click} />);

  wrapper.find('button').simulate('click');
  expect(click).toHaveBeenCalled();
});
