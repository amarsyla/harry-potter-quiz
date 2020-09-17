import React from 'react';
import Answer from '../answer';
import './question.css';

const Question = ({ question }) => (
  <div className="question">
    <h3 className="question__title">{question.question}</h3>

    <div className="question__answers">
      {question.answers.map(answer => (
        <Answer
          key={answer.answer}
          answer={answer}
        />
      ))}
    </div>
  </div>
);

export default Question;
