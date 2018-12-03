import React from 'react';
import Avatar from '../Avatar/Avatar';
import Operation from '../../molecules/Operation/Operation';
import styles from './Message.module.css';
import avatar from './avatar.jpg';

const Message = ({ message, isCurrentUserMessage }) => {
  const classes = isCurrentUserMessage
    ? `${styles.messageWrapper} ${styles.currentUserMessage}`
    : styles.messageWrapper;

  return (
    <div className={classes}>
      <div className={styles.avatarWrapper}>
        <Avatar image={avatar} />
      </div>
      <div className={styles.message}>
        {message.text.type === 'text' ? (
          <div>
            <strong className={styles.name}>{`${message.senderId}: `}</strong>
            {message.text.message}
          </div>
        ) : (
          <div>
            <h4 className={styles.title}>Операция</h4>
            <Operation
              date={message.text.message.createdAt}
              operation={message.text.message.operation}
              operationDiff={message.text.message.operationDiff}
              currencyType={message.text.message.currencyType}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
