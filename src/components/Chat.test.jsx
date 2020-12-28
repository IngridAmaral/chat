import React from 'react';
import { shallow } from 'enzyme';
import Messages from './messages/Messages';
import { message } from './messages/message/data-test';
import Form from './form/Form';
import Chat, { FULLFILED } from './Chat';
import { fetchMessages, sendMessage } from '../api';

jest.mock('../api', () => ({
  fetchMessages: jest.fn(),
  sendMessage: jest.fn()
}));

const text = 'This is a new message!';

beforeEach(() => {
  fetchMessages.mockResolvedValue([message]);
});

it('renders component', () => {
  shallow(<Chat />);
});

it('should NOT render Messages if loading is not Fullfiled', () => {
  const wrapper = shallow(<Chat />);

  expect(wrapper.state().loading).not.toEqual(FULLFILED);
  expect(wrapper.find(Messages).exists()).toEqual(false);
});

it('should render Messages', async () => {
  const wrapper = shallow(<Chat />);

  const messages = await fetchMessages();
  expect(messages).toEqual([message]);
  expect(wrapper.find(Messages).exists()).toEqual(true);
});

it('should render Form', () => {
  const wrapper = shallow(<Chat />);

  expect(wrapper.find(Form).exists()).toEqual(true);
});

it('changes state when writing on input', () => {
  const wrapper = shallow(<Chat />);

  expect(wrapper.state().newMessage).toEqual('');

  wrapper
    .find(Form)
    .props()
    .handleInput({ target: { value: text } });

  expect(wrapper.state().newMessage).toEqual(text);
});

describe('when button is clicked', () => {
  it('clear newMessage and check if sendMessage was called when input is not empty', () => {
    const wrapper = shallow(<Chat />);

    wrapper
      .find(Form)
      .props()
      .handleInput({ target: { value: text } });

    expect(wrapper.state().newMessage).toEqual(text);

    wrapper.find(Form).props().sendMessage(new Event('click'));

    expect(sendMessage).toHaveBeenCalledTimes(1);
    expect(wrapper.find(Form).props().newMessage).toEqual('');
  });

  it('does not call sendMessage when input is empty', () => {
    const wrapper = shallow(<Chat />);

    wrapper.find(Form).props().sendMessage(new Event('click'));

    expect(sendMessage).not.toHaveBeenCalled();
    expect(wrapper.find(Form).props().newMessage).toEqual('');
  });
});
