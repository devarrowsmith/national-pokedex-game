import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Message from './Message';
import SettingButtons from './SettingButtons';

const StyledHeader = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: black;
  height: 50vh;
  max-height: 300px;
  width: 100vw;
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

  </StyledHeader>
);

export default Header;
