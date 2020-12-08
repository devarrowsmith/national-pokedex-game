import React from 'react';
import PropTypes from 'prop-types';
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
      return (
        <MessageContainer>
          <Loading />
        </MessageContainer>
      );
    } if (win) {
      return (
        <MessageContainer>
          <WinMessage />
        </MessageContainer>
      );
    }
    return (
      <MessageContainer>
        <Question
          answer={answer}
        />
      </MessageContainer>
    );
  };

  return (
    <MessageContainer>
      {loadingCondition()}
    </MessageContainer>
  );
};

Message.defaultProps = {
  answer: 0,
};

Message.propTypes = {
  busy: PropTypes.bool.isRequired,
  answer: PropTypes.number,
  win: PropTypes.bool.isRequired,
};

export default Message;
