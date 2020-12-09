import React from 'react';
import Message from './message/Message';
import { fetchMessages } from '../../api';
import './Messages.scss';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount = async () => {
    const messages = await fetchMessages();

    this.setState({ messages });
  };

  render() {
    const { messages } = this.state;

    if (messages.length === 0) {
      return null;
    }

    return (
      <div className="messages">
        {messages.map((messageData) => (
          <Message
            isUser={messageData.author === 'Jessica'}
            messageData={messageData}
            key={messageData.timestamp}
          />
        ))}
      </div>
    );
  }
}

export default Messages;
