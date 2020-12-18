import React from 'react';
import Messages from './messages/Messages';
import Form from './form/Form';
import { sendMessage, fetchMessages } from '../api';
import './Chat.scss';

const ACTIVE_USER = 'Jessica';
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      error: false,
      newMessage: '',
      activeUser: ACTIVE_USER
    };
  }

  componentDidMount = () => {
    this.receiveMesssages();
  };

  receiveMesssages = async () => {
    const messages = await fetchMessages();

    if (messages === 'Error') {
      this.setState({ error: true });
    } else {
      this.setState({ messages, error: false });
    }
  };

  handleNewMessage = (e) => {
    const { value } = e.target;
    this.setState({ newMessage: value });
  };

  sendMessage = (e) => {
    const { newMessage, activeUser } = this.state;
    e.preventDefault();

    if (newMessage) {
      sendMessage({ message: newMessage, author: activeUser });
    }

    this.addNewMessage();
  };

  addNewMessage = () => {
    const { newMessage, activeUser } = this.state;
    const date = new Date().getTime();

    this.setState((prevState) => ({
      messages: [
        ...prevState.messages,
        {
          message: newMessage,
          id: newMessage,
          timestamp: date,
          author: activeUser
        }
      ],
      newMessage: ''
    }));
  };

  render() {
    const { messages, error, newMessage } = this.state;

    return (
      <div className="chat">
        {messages.length && (
          <Messages
            newMessage={newMessage}
            activeUser={ACTIVE_USER}
            messages={messages}
            error={error}
          />
        )}
        <Form
          handleInput={this.handleNewMessage}
          sendMessage={this.sendMessage}
          newMessage={newMessage}
        />
      </div>
    );
  }
}

export default Chat;
