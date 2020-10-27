import React from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import Question from './Question';
import WinMessage from './WinMessage';

const MessageContainer = styled.div`
  height: 100px;
  width: 100%;
  max-width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = ({ busy, answer, win }) => {
  const loadingCondition = () => {
    if (busy) {
      return (<Loading />);
    } if (win) {
      return (
        <WinMessage />);
    }
    return (
      <Question
        answer={answer}
      />
    );
  };

  return (
    <MessageContainer>
      {loadingCondition()}
    </MessageContainer>
  );
};

export default Message;
