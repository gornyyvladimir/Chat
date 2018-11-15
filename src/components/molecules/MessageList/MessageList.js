import React from 'react';
import Message from '../../atoms/Message/Message';
import styles from '../MessageList/MessageList.module.css';
const MessageList = ({ messages, user }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.messageList}>
        {messages.map(message => (
          <li key={message.id}>
            <Message message={message} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
