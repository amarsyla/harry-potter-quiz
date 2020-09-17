import React from 'react';
import Answer from '../answer';

const Question = ({ question }) => (
  <div className="question">
    <div><b>{question.question}</b></div>

    {question.answers.map(answer => (
      <Answer
        key={answer.answer}
        answer={answer}
      />
    ))}

    <br />
    <br />
  </div>
);

export default Question;
