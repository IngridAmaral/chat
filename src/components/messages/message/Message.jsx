import React from 'react';
import he from 'he';
import PropTypes from 'prop-types';
import convertTimestamp from '../../../utils/convertTimestamp';
import './Message.scss';

const Message = ({ isUser, messageData: { author, timestamp, message } }) => (
  <div className={`message ${isUser ? 'user-message' : 'received-message'}`}>
    {!isUser && <span className="message-author">{author}</span>}
    <span className="message-text">{he.decode(message)}</span>
    <span className="message-timestamp">{convertTimestamp(timestamp)}</span>
  </div>
);

Message.propTypes = {
  isUser: PropTypes.bool,
  messageData: PropTypes.shape({
    _id: PropTypes.string,
    message: PropTypes.string,
    author: PropTypes.string,
    timestamp: PropTypes.number,
    token: PropTypes.string
  }).isRequired
};

Message.defaultProps = {
  isUser: false
};

export default Message;
