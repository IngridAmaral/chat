import React from 'react';
import PropTypes from 'prop-types';
import Message from './message/Message';
import { fetchMessages } from '../../api';
import './Messages.scss';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], error: false };
  }

  componentDidMount = () => {
    this.receiveMesssages();
  };

  componentDidUpdate = () => {
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

  render() {
    const { messages, error } = this.state;
    const { activeUser } = this.props;

    if (error) {
      return <div>error</div>;
    }

    return (
      <div className="messages">
        {messages.map((messageData) => (
          <Message
            isUser={messageData.author === activeUser}
            messageData={messageData}
            key={messageData.timestamp}
          />
        ))}
      </div>
    );
  }
}

Messages.propTypes = {
  activeUser: PropTypes.string.isRequired
};

export default Messages;
