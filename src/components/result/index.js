import React from 'react';
import { connect } from 'react-redux';
import Button from '../button';
import { restartQuiz } from '../../store/actions';
import calculateScore from '../../helpers/calculate-score';
import './result.css';

const Result = ({
  questions,
  restartQuiz
}) => {
  const score = calculateScore(questions);

  let icon = <span role="img" aria-label="sad icon">😢</span>;

  if (score.percentage > 75) {
    icon = <span role="img" aria-label="very happy icon">😀</span>;
  } else if (score.percentage > 50) {
    icon = <span role="img" aria-label="smiley icon">🙂</span>;
  } else if (score.percentage > 25) {
    icon = <span role="img" aria-label="disappointed icon">😕</span>;
  }

  return (
    <div className="result">
      <div className="result__icon">{icon}</div>
      <h2 className="result__title">You got {score.correctAnswersCount} out of {score.totalAnswersCount} answers correct!</h2>

      <Button
        className="result__button"
        onClick={() => {
          restartQuiz();
        }}
      >
        Start over
      </Button>
    </div>
  );
};

const mapState = state => ({
  questions: state.questions
});

const mapDispatch = dispatch => ({
  restartQuiz: () => dispatch(restartQuiz())
});

export default connect(mapState, mapDispatch)(Result);
