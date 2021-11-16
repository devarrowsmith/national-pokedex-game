import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LoadingMessage from './LoadingMessage';
import QuestionMessage from './QuestionMessage';
import WinMessage from './WinMessage';
import LooseMessage from './LooseMessage';

const MessageContainer = styled.div`
  height: 100px;
  width: 100%;
  max-width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = ({
  busy, answer, win, numSelected,
}) => {
  const loadingCondition = () => {
    if (busy) {
      return (
        <MessageContainer>
          <LoadingMessage />
        </MessageContainer>
      );
    } if (win) {
      return (
        <MessageContainer>
          <WinMessage />
        </MessageContainer>
      );
    }
    if (numSelected > 2) {
      return (
        <MessageContainer>
          <LooseMessage />
        </MessageContainer>
      );
    }
    return (
      <MessageContainer>
        <QuestionMessage
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
  numSelected: PropTypes.number.isRequired,
};

export default Message;
