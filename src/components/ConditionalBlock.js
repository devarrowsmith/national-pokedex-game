import React from 'react';
import Block from './Block';
import DittoBlock from './DittoBlock';

const ConditionalBlock = ({ sprite, text, selected }) => (
  <>
    {selected.includes(text)
      ? (<DittoBlock />)
      : (
        <Block
          key={text}
          sprite={sprite}
          text={text}
          selected={selected}
        />
      )}
  </>
);

export default ConditionalBlock;
