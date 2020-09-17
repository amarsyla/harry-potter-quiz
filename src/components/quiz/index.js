import React from 'react';
import Question from '../question';

const Quiz = ({ questions }) => (
  <div className="questions">
    {questions.map(question => (
      <Question
        key={question.question}
        question={question}
      />
    ))}
  </div>
);

export default Quiz;
