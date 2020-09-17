const calculateScore = (questions) => {
  const totalAnswersCount = questions.length;
  const correctAnswersCount = questions.reduce((count, question) => count + (question.answers.find(answer => answer.isCorrect === true && answer.isSelected === true) !== undefined ? 1 : 0), 0);
  const percentage = (correctAnswersCount / totalAnswersCount) * 100;

  return {
    totalAnswersCount,
    correctAnswersCount,
    percentage
  };
};

export default calculateScore;
