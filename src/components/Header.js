import React from 'react';
import Title from './Title';
import Message from './Message';
import SettingButtons from './SettingButtons';

const Header = ({ answer }) => (
  <>
    <Title />
    <Message
      answer={answer}
    />
    <SettingButtons />
  </>
);
export default Header;
