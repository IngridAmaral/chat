import React from 'react';
import Messages from './messages/Messages';
import Form from './form/Form';
import './Chat.scss';

const Chat = () => (
  <div className="chat">
    <Messages />
    <Form />
  </div>
);

export default Chat;
