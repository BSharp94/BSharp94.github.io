import React from 'react';
import Typist from 'react-typist';
import './TextTyping.css';

const TextTyping = ({ text }) => (
  <Typist
    cursor={{
      show: true,
      blink: true,
      element: '|',
      hideWhenDone: true,
      hideWhenDoneDelay: 500,
    }}
  >
    {text}
  </Typist>
);

export default TextTyping;

