import React from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import Question from './Question';
import Answer from './Answer';

const MessageContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = ({ busy, answer }) => {
  const loadingCondition = () => (busy ? (
    <Loading />
  ) : (
    <Question
      answer={answer}
    />
  ));

  return (
    <MessageContainer>
      {loadingCondition()}
    </MessageContainer>
  );
};

export default Message;
