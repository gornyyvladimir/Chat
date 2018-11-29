import React from 'react';
import styles from './BankAccount.module.css';
import Toggle from '../../atoms/Toggle/Toggle';
import Card from '../../molecules/Card/Card';

const BankAccount = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.toggleWrapper}>
        <Toggle />
      </div>
      <div className={styles.cardWrapper}>
        <Card
          accountNumber="57890456"
          money="69 650"
          percent="8"
          createdAt="23.01.2017 | 13:55"
          lastOperation="08.03.2017 | 19:21"
          lastOperationDiff="+ 3 500"
        />
        <Card
          accountNumber="57890457"
          money="3 500"
          percent="2"
          createdAt="23.01.2017 | 13:55"
          lastOperation="08.03.2017 | 19:21"
          lastOperationDiff="- 69"
          currencyType="USD"
          className={styles.greyCard}
        />
        <Card
          accountNumber="57890457"
          money="3 500"
          percent="2"
          createdAt="23.01.2017 | 13:55"
          lastOperation="08.03.2017 | 19:21"
          lastOperationDiff="- 69"
          currencyType="USD"
        />
        <Card
          accountNumber="57890457"
          money="3 500"
          percent="2"
          createdAt="23.01.2017 | 13:55"
          lastOperation="08.03.2017 | 19:21"
          lastOperationDiff="- 69"
          currencyType="EUR"
          className={styles.greyCard}
        />
      </div>
    </div>
  );
};

export default BankAccount;
