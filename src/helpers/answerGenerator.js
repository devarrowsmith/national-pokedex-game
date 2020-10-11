const answerGenerator = (dex) => {
  const answerIndex = Math.floor(Math.random() * dex.length);
  console.log(dex[answerIndex]);
  return dex[answerIndex];
};

export default answerGenerator;
