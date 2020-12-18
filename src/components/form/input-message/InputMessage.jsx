import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import './InputMessage.scss';

const InputMessage = ({ handleInput, newMessage }) => (
  <TextareaAutosize
    maxRows={3}
    minRows={1}
    className="input-message"
    onChange={handleInput}
    placeholder="Type your message"
    value={newMessage}
  />
);

InputMessage.propTypes = {
  handleInput: PropTypes.func.isRequired,
  newMessage: PropTypes.string.isRequired
};

export default InputMessage;
