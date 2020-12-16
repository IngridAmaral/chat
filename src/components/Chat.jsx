import React from 'react';
import Messages from './messages/Messages';
import Form from './form/Form';
import { sendMessage } from '../api';
import './Chat.scss';

const ACTIVE_USER = 'Jessica';
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newMessage: '', activeUser: ACTIVE_USER };
  }

  handleNewMessage = (e) => {
    const { value } = e.target;
    this.setState({ newMessage: value });
  };

  sendMessage = (e) => {
    const { newMessage, activeUser } = this.state;
    e.preventDefault();

    sendMessage({ message: newMessage, author: activeUser });
  };

  render() {
    return (
      <div className="chat">
        <Messages activeUser={ACTIVE_USER} />
        <Form
          handleInput={this.handleNewMessage}
          sendMessage={this.sendMessage}
        />
      </div>
    );
  }
}

export default Chat;
