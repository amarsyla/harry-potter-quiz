import React from 'react';
import Notification from '../notification';
import ProgressBar from '../progress-bar';
import './footer.css';

const Footer = ({
  questions,
  activeQuestionIndex,
  notification
}) => {
  if (questions.length === 0) {
    return null;
  }

  const progressValue = ((activeQuestionIndex + 1) / questions.length) * 100;
  const progressText = `${activeQuestionIndex + 1} / ${questions.length}`;

  return (
    <div className="footer">
      {notification && (
        <Notification notification={notification} />
      )}

      <ProgressBar
        value={progressValue}
        text={progressText}
      />
    </div>
  );
};

export default Footer;
