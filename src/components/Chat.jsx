import React from 'react';
import Messages from './messages/Messages';
import Form from './form/Form';
import { sendMessage, fetchMessages } from '../api';
import './Chat.scss';

const ACTIVE_USER = 'Jessica';
export const PENDING = 'PENDING';
export const FULLFILED = 'FULLFILED';
export const REJECTED = 'REJECTED';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loading: PENDING,
      newMessage: '',
      activeUser: ACTIVE_USER
    };
  }

  componentDidMount = () => {
    this.receiveMesssages();
  };

  receiveMesssages = async () => {
    try {
      const messages = await fetchMessages();

      this.setState({ messages, loading: FULLFILED });
    } catch (error) {
      this.setState({ loading: REJECTED });
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
      this.addNewMessage();
    }
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
    const { messages, loading, newMessage } = this.state;

    return (
      <div className="chat">
        {loading === FULLFILED && (
          <Messages
            newMessage={newMessage}
            activeUser={ACTIVE_USER}
            messages={messages}
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
