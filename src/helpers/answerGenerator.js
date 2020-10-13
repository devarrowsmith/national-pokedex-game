const answerGenerator = (dex) => {
  const answerIndex = Math.floor(Math.random() * dex.length);
  return dex[answerIndex];
};

export default answerGenerator;
