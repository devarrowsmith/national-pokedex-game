import React from 'react';
import Question from './Question';
import Answer from './Answer';

const Message = ({ answer }) => (
  <Question
    answer={answer}
  />
);

export default Message;
