import React from 'react';
import styles from './BankAccount.module.css';
import Toggle from '../../atoms/Toggle/Toggle';
import Card from '../../molecules/Card/Card';

const BankAccount = () => {
  return (
    <div className={styles.wrapper}>
      <Toggle />
      <Card
        accountNumber="57890456"
        quantity="69 650"
        percent="8"
        createdAt="23.01.2017 | 13:55"
        lastOperation="08.03.2017 | 19:21"
        lastOperationDiff="+ 3 500"
      />
      <Card
        accountNumber="57890457"
        quantity="3 500"
        percent="2"
        createdAt="23.01.2017 | 13:55"
        lastOperation="08.03.2017 | 19:21"
        lastOperationDiff="- 69"
        currencySymbol="$"
      />
    </div>
  );
};

export default BankAccount;
