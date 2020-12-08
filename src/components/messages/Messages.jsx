import React from 'react';
import UserMessage from './user-message/UserMessage';
import ReceivedMessage from './received-message/ReceivedMessage';
import './Messages.scss';

const Messages = () => (
  <div className="messages">
    <ReceivedMessage />
    <UserMessage />
    <ReceivedMessage />
    <UserMessage />
    <ReceivedMessage />
    <UserMessage />
    <ReceivedMessage />
    <UserMessage />
    <ReceivedMessage />
    <UserMessage />
    <ReceivedMessage />
    <UserMessage />
  </div>
);

export default Messages;
