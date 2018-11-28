import React from 'react';
import Chat from '../../organisms/Chat/Chat';
import BankAccount from '../../organisms/BankAccount/BankAccount';
import styles from './MainPage.module.css';

const MainPage = props => {
  return (
    <div className={styles.wrapper}>
      <Chat />
      <BankAccount />
    </div>
  );
};

export default MainPage;
