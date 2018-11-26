import React from 'react';
import Avatar from '../Avatar/Avatar';
import styles from './Message.module.css';
import avatar from './avatar.jpg';

const Message = ({ message, isCurrentUserMessage }) => {

  const classes = isCurrentUserMessage ? `${styles.messageWrapper} ${styles.currentUserMessage}` : styles.messageWrapper;

  return (
    <div className={classes}>
      <div className={styles.avatarWrapper}>
        <Avatar image={avatar} />
      </div>
      <p className={styles.message}>
        <strong className={styles.name}>{`${message.senderId}: `}</strong>
        {message.text}
      </p>
    </div>
  );
};

export default Message;
