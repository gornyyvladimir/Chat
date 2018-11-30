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
          money={69500}
          percent="8"
          createdAt="23.01.2017 | 13:55"
          lastOperation="08.03.2017 | 19:21"
          lastOperationDiff={3500}
        />
        <Card
          accountNumber="57890457"
          money={3500}
          percent="2"
          createdAt="23.01.2017 | 13:55"
          lastOperation="08.03.2017 | 19:21"
          lastOperationDiff={-69}
          currencyType="USD"
          className={styles.greyCard}
        />
        <Card
          accountNumber="57890457"
          money={2700}
          percent="2"
          createdAt="23.01.2017 | 13:55"
          lastOperation="08.03.2017 | 19:21"
          lastOperationDiff={-8000}
          currencyType="USD"
        />
        <Card
          accountNumber="57890457"
          money={42}
          percent="2"
          createdAt="23.01.2017 | 13:55"
          lastOperation="08.03.2017 | 19:21"
          lastOperationDiff={40000}
          currencyType="EUR"
          className={styles.greyCard}
        />
      </div>
    </div>
  );
};

export default BankAccount;
