import React from 'react';
import Avatar from '../Avatar/Avatar';
import styles from './Message.module.css';
import avatar from './avatar.jpg';

const Message = ({ message }) => {
  return (
    <div className={styles.messageWrapper}>
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
