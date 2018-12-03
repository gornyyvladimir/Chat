import React from 'react';
import classnames from 'classnames';
import Avatar from '../Avatar/Avatar';
import Operation from '../../molecules/Operation/Operation';
import styles from './Message.module.css';
import avatar from './avatar.jpg';

const Message = ({ message, isCurrentUserMessage }) => {
  const classes = isCurrentUserMessage
    ? `${styles.messageWrapper} ${styles.currentUserMessage}`
    : styles.messageWrapper;

  const isText = message.text.type === 'text';

  const textClasses = classnames(styles.paragraph, {
    [styles.alignRight]: isCurrentUserMessage && isText,
  });

  const messageBody = isText ? (
    <p className={textClasses}>
      <strong className={styles.name}>{`${message.senderId}: `}</strong>
      {message.text.message}
    </p>
  ) : (
    <>
      <h4 className={styles.title}>Операция</h4>
      <Operation
        date={message.text.message.createdAt}
        operation={message.text.message.operation}
        operationDiff={message.text.message.operationDiff}
        currencyType={message.text.message.currencyType}
      />
    </>
  );

  return (
    <div className={classes}>
      <div className={styles.avatarWrapper}>
        <Avatar image={avatar} />
      </div>
      <div className={styles.message}>{messageBody}</div>
    </div>
  );
};

export default Message;
