import React from 'react';
import Message from './message/Message';
import './Messages.scss';

const Messages = () => (
  <div className="messages">
    <Message isUser />
    <Message author="Tom" />
    <Message author="Tom" />
    <Message isUser />
    <Message isUser />
    <Message author="Tom" />
  </div>
);

export default Messages;
