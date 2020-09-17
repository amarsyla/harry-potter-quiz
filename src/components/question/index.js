import React from 'react';
import classNames from 'classnames';
import Answer from '../answer';
import './question.css';

const Question = ({
  question,
  questionIndex
}) => (
  <div
    className={classNames(
      'question',
      {
        'is-submitted': question.isSubmitted === true
      }
    )}
  >
    <h3 className="question__title">{question.question}</h3>

    <div className="question__answers">
      {question.answers.map((answer, index) => (
        <Answer
          key={answer.answer}
          answer={answer}
          question={question}
          questionIndex={questionIndex}
          answerIndex={index}
        />
      ))}
    </div>
  </div>
);

export default Question;
