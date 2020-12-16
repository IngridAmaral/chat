import React from 'react';
import PropTypes from 'prop-types';
import './SendButton.scss';

const SendButton = ({ sendMessage }) => (
  <button type="submit" className="send-button" onClick={sendMessage}>
    Send
  </button>
);

SendButton.propTypes = {
  sendMessage: PropTypes.func.isRequired
};

export default SendButton;
