import React from 'react';
import classNames from 'classnames';
import './notification.css';

const Notification = ({ notification }) => (
  <div
    className={classNames(
      'notification',
      `is-${notification.type}`
    )}
  >
    {notification.text}
  </div>
);

export default Notification;
