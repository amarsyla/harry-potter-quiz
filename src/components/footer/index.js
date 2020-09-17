import React from 'react';
import { connect } from 'react-redux';
import Notification from '../notification';
import ProgressBar from '../progress-bar';
import './footer.css';

const Footer = ({
  isCompleted,
  questions,
  activeQuestionIndex,
  notification
}) => {
  if (questions.length === 0) {
    return null;
  }

  const progressValue = isCompleted ? 100 : ((activeQuestionIndex) / questions.length) * 100;
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

const mapState = state => ({
  isCompleted: state.isCompleted,
  questions: state.questions,
  activeQuestionIndex: state.activeQuestionIndex,
  notification: state.notification
});

export default connect(mapState, null)(Footer);
