import React from 'react';
import classNames from 'classnames';
import './answer.css';

const Answer = ({ answer }) => (
  <button
    type="button"
    className={classNames(
      'answer',
      {
        'is-success': false,
        'is-error': false
      }
    )}
  >
    {answer.answer}
  </button>
);

export default Answer;
