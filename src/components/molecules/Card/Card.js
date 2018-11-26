import React from 'react';
import styles from './Card.module.css';

const Card = ({ accountNumber, quantity, percent, createdAt, lastOperation, lastOperationDiff, currencySymbol = "₽"}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.accountNumber}>{`Счет № ${accountNumber}`}</h3>
        <button>Full size</button>
      </div>
      <strong>{`${quantity} ${currencySymbol}`}</strong>
      <span>{`${percent}% годовых`}</span>
      <span>{`Создан ${createdAt}`}</span>
      <p>{`Последняя операция ${lastOperation} `}<span>{`(${lastOperationDiff} ${currencySymbol})`}</span></p>
    </div>
  );
};

export default Card;
