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

const Question = ({ answer }) => (
  <StyledQuestion>
    Which Pokémon has National Pokedex Number
    <span>
      {' '}
      {answer}
      {' '}
    </span>
    ?
  </StyledQuestion>
);

Question.defaultProps = {
  answer: 0,
};

Question.propTypes = {
  answer: PropTypes.number,
};

export default Question;
