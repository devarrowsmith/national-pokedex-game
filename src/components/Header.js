import React from 'react';
import Title from './Title';
import Message from './Message';
import SettingButtons from './SettingButtons';

const Header = ({
  busy, answer, difficulty, win, setDifficulty, setBusy, setPokemonData,
}) => (
  <>
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

  </>
);

export default Header;
