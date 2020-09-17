import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Button from '../button';
import { submitAnswer } from '../../store/actions';
import './answer.css';

const Answer = ({
  answer,
  answerIndex,
  question,
  questionIndex,
  submitAnswer
}) => {
  const isAnswerCorrect = question.isSubmitted && answer.isCorrect === true;
  const isAnswerWrong = question.isSubmitted && answer.isCorrect !== true && answer.isSelected === true;

  return (
    <Button
      className={classNames(
        'answer',
        {
          'is-success': isAnswerCorrect === true,
          'is-error': isAnswerWrong === true
        }
      )}
      onClick={() => {
        submitAnswer(questionIndex, answerIndex, answer.isCorrect === true);
      }}
    >
      {answer.answer}
    </Button>
  );
};

const mapDispatch = dispatch => ({
  submitAnswer: (questionIndex, answerIndex, isAnswerCorrect) => dispatch(submitAnswer(questionIndex, answerIndex, isAnswerCorrect))
});

export default connect(null, mapDispatch)(Answer);
