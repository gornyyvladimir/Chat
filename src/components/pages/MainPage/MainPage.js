import React from 'react';
import Chat from '../../organisms/Chat/Chat';
import styles from './MainPage.module.css';

const MainPage = props => {
  return (
    <div className={styles.wrapper}>
      <Chat />
    </div>
  );
};

export default MainPage;
