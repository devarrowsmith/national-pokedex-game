import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Message from './Message';
import SettingButtons from './SettingButtons';

const Header = ({ busy, answer, setDifficulty, setBusy, setPokemonData, difficulty  }) => (
  <>
    <Title />
    <Message
      busy={busy}
      answer={answer}
    />
    <SettingButtons
      setDifficulty={setDifficulty}
      setBusy={setBusy}
      setPokemonData={setPokemonData}
      difficulty={difficulty}
    />

  </>
);

Header.propTypes = {
  answer: PropTypes.number.isRequired,
};
export default Header;
