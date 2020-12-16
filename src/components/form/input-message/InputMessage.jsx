import React from 'react';
import PropTypes from 'prop-types';
import './InputMessage.scss';

const InputMessage = ({ handleInput }) => (
  <input
    type="text"
    className="input-message"
    onChange={handleInput}
    placeholder="Message"
  />
);

InputMessage.propTypes = {
  handleInput: PropTypes.func.isRequired
};

export default InputMessage;
