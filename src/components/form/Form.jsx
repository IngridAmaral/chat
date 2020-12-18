import React from 'react';
import PropTypes from 'prop-types';
import InputMessage from './input-message/InputMessage';
import SendButton from './send-button/SendButton';
import './Form.scss';

const Form = ({ handleInput, sendMessage, newMessage }) => (
  <div className="form">
    <InputMessage handleInput={handleInput} newMessage={newMessage} />
    <SendButton sendMessage={sendMessage} />
  </div>
);

Form.propTypes = {
  handleInput: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  newMessage: PropTypes.string.isRequired
};

export default Form;
