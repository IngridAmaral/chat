import React from 'react';
import PropTypes from 'prop-types';
import Message from './message/Message';
import './Messages.scss';

class Messages extends React.Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate(prevProps) {
    const { messages } = this.props;
    const hasNewMessage = messages.length !== prevProps.messages.length;

    if (hasNewMessage) {
      this.scrollToBottom();
    }
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'instant' });
  };

  render() {
    const { activeUser, messages, error } = this.props;

    if (error) {
      return <div>Error!</div>;
    }

    return (
      <div ref={this.mesRef} className="messages" onScroll={this.handleScroll}>
        {messages.map((messageData) => (
          <Message
            isUser={messageData.author === activeUser}
            messageData={messageData}
            key={messageData.timestamp}
          />
        ))}
        <div
          style={{ float: 'left', clear: 'both' }}
          ref={(el) => {
            this.messagesEnd = el;
          }}
        />
      </div>
    );
  }
}

Messages.propTypes = {
  activeUser: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      message: PropTypes.string,
      author: PropTypes.string,
      timestamp: PropTypes.number,
      token: PropTypes.string,
      length: PropTypes.number
    })
  ).isRequired
};

export default Messages;
