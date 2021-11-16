import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledQuestion = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.4em;
  line-height: 1.4em;
  text-align: center;

  span {
    color: #FFFF33;
  }
`;

const QuestionMessage = ({ answer }) => (
  <StyledQuestion>
    Which Pokémon has National Pokédex Number
    <span>
      {' '}
      {answer}
      {' '}
    </span>
    ?
  </StyledQuestion>
);

QuestionMessage.defaultProps = {
  answer: 0,
};

QuestionMessage.propTypes = {
  answer: PropTypes.number,
};

export default QuestionMessage;
