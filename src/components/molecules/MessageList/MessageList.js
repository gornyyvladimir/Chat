import React from 'react';
import { connect } from 'react-redux';
import Message from '../../atoms/Message/Message';
import styles from '../MessageList/MessageList.module.css';

const MessageList = ({ messages, currentUser, handleScroll }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.messageList} onScroll={handleScroll}>
        {messages.map(message => (
          <li key={message.id}>
            <Message isCurrentUserMessage={currentUser.id === message.senderId} message={message} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
});

export default connect(mapStateToProps)(MessageList);
