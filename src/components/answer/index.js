import React from 'react';

const Answer = ({ answer }) => (
  <div className="answer">
    {answer.answer}
    {answer.isCorrect && ' (correct)'}
  </div>
);

export default Answer;
