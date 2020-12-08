import React from 'react';
import InputMessage from './input-message/InputMessage';
import SendButton from './send-button/SendButton';
import './Form.scss';

const Form = () => (
  <div className="form">
    <InputMessage />
    <SendButton />
  </div>
);

export default Form;
