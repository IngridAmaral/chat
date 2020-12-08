import React from 'react';
import PropTypes from 'prop-types';
import './Message.scss';

const Message = ({ isUser, author, message, timestamp }) => (
  <div className={`message ${isUser ? 'user-message' : 'received-message'}`}>
    {!isUser && <span className="message-author">{author}</span>}
    <span className="message-text">{message}</span>
    <span className="message-timestamp">{timestamp}</span>
  </div>
);

Message.propTypes = {
  isUser: PropTypes.bool,
  author: PropTypes.string,
  message: PropTypes.string,
  timestamp: PropTypes.number
};

Message.defaultProps = {
  author: '',
  isUser: false,
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  timestamp: 1521096352339
};

export default Message;
