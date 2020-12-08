import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from './Title';
import Message from './Message';
import SettingButtons from './SettingButtons';
import LivesBar from './LivesBar';

const StyledHeader = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: black;
  height: 340px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Header = ({
  busy, answer, difficulty, win, setDifficulty, setBusy, setPokemonData,
}) => (
  <StyledHeader>
    <Title />
    <Message
      busy={busy}
      answer={answer}
      win={win}
    />
    <SettingButtons
      setDifficulty={setDifficulty}
      setBusy={setBusy}
      setPokemonData={setPokemonData}
      difficulty={difficulty}
    />
    <LivesBar />
  </StyledHeader>
);

Header.defaultProps = {
  answer: 0,
};

Header.propTypes = {
  busy: PropTypes.bool.isRequired,
  difficulty: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    numPokemon: PropTypes.number.isRequired,
  }).isRequired,
  answer: PropTypes.number,
  win: PropTypes.bool.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  setBusy: PropTypes.func.isRequired,
  setPokemonData: PropTypes.func.isRequired,
};

export default Header;
