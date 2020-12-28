import React from 'react';
import { shallow } from 'enzyme';
import TextareaAutosize from 'react-textarea-autosize';
import InputMessage from './InputMessage';

const defaultProps = {
  handleInput() {},
  newMessage: ''
};

it('renders component', () => {
  shallow(<InputMessage {...defaultProps} />);
});

it('renders the textareaAutosize', () => {
  const wrapper = shallow(<InputMessage {...defaultProps} />);

  expect(wrapper.find(TextareaAutosize).exists()).toBe(true);
});

it('should trigger onChange function when typing', () => {
  const handleInput = jest.fn();
  const event = { target: { value: 'test' } };
  const wrapper = shallow(
    <InputMessage {...defaultProps} handleInput={handleInput} />
  );

  wrapper.find(TextareaAutosize).simulate('change', event);
  expect(handleInput).toHaveBeenCalledWith(event);
});
