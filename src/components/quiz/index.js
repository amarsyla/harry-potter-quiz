import React from 'react';
import Loader from '../loader';
import Question from '../question';
import './quiz.css';

const Quiz = ({
  isLoading,
  questions,
  activeQuestionIndex
}) => {
  console.log(isLoading, questions, activeQuestionIndex);

  if (isLoading || questions.length === 0) {
    return <Loader />;
  }

  const activeQuestion = questions[activeQuestionIndex];

  return (
    <div className="quiz">
      <Question
        question={activeQuestion}
      />
    </div>
  );
};

export default Quiz;
