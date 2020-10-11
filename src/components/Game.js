import React, { useState } from 'react';
import Header from './Header';
import Grid from './Grid';

const Page = () => {
  const [difficulty, setDifficulty] = useState({
    mode: 'easy',
    blocks: 6,
  });

  return (
    <>
      <Header setDifficulty={setDifficulty} />
      <Grid difficulty={difficulty} />
    </>
  );
};
export default Page;
