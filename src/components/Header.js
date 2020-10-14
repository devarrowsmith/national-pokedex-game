import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Message from './Message';
import SettingButtons from './SettingButtons';

const Header = ({ busy, answer, setDifficulty }) => (
  <>
    <Title />
    <Message
      busy={busy}
      answer={answer}
    />
    <SettingButtons />

  </>
);

Header.propTypes = {
  answer: PropTypes.number.isRequired,
};
export default Header;
