import React from 'react';
import styles from './ChatLayout.module.css';

const ChatLayout = props => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default ChatLayout;
