import React from 'react';
import PropTypes from 'prop-types';
import Message from './message/Message';
import './Messages.scss';

const Messages = ({ activeUser, messages, error }) => {
  if (error) {
    return <div>Error!</div>;
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
};

Messages.propTypes = {
  activeUser: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      message: PropTypes.string,
      author: PropTypes.string,
      timestamp: PropTypes.number,
      token: PropTypes.string
    })
  ).isRequired
};

export default Messages;
