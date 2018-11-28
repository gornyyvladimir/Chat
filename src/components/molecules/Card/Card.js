import React from 'react';
import classnames from 'classnames';
import styles from './Card.module.css';

const Card = ({ className, accountNumber, money, percent, createdAt, lastOperation, lastOperationDiff, currencySymbol = "₽"}) => {
  const classes = classnames(styles.wrapper, className);
  return (
    <div className={classes}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.accountNumber}>{`Счет № ${accountNumber} `}</h3>
        <button className={styles.maximizeButton} onClick={() => console.log("Clcik")}>Full size</button>
      </div>
      <strong className={styles.money}>{`${money} ${currencySymbol}`}</strong>
      <span className={styles.text}>{`${percent}% годовых`}</span>
      <span className={styles.text}>{`Создан ${createdAt}`}</span>
      <span className={styles.text}>{`Последняя операция ${lastOperation} `}<span>{`(${lastOperationDiff} ${currencySymbol})`}</span></span>
    </div>
  );
};

export default Card;
