import React from 'react';
import { connect } from 'react-redux';
import Loader from '../loader';
import Result from '../result';
import Question from '../question';
import './quiz.css';

const Quiz = ({
  isLoading,
  isCompleted,
  questions,
  activeQuestionIndex
}) => {
  if (isLoading || questions.length === 0) {
    return <Loader />;
  }

  if (isCompleted) {
    return <Result />;
  }

  const activeQuestion = questions[activeQuestionIndex];

  return (
    <div className="quiz">
      <Question
        question={activeQuestion}
        questionIndex={activeQuestionIndex}
      />
    </div>
  );
};

const mapState = state => ({
  isLoading: state.isLoading,
  isCompleted: state.isCompleted,
  questions: state.questions,
  activeQuestionIndex: state.activeQuestionIndex
});

export default connect(mapState, null)(Quiz);
