import React from 'react';
import Avatar from '../Avatar/Avatar';
import styles from './Message.module.css';

const Message = ({ message }) => {
  return (
    <div className={styles.messageWrapper}>
      <div className={styles.avatarWrapper}>
        <Avatar image={message.sender.avatar} />
      </div>
      <p className={styles.message}>
        <strong className={styles.name}>{`${message.sender.name}: `}</strong>
        {message.text}
      </p>
    </div>
  );
};

export default Message;
