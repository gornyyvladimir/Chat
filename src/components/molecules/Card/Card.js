import React from 'react';
import classnames from 'classnames';
import styles from './Card.module.css';

const getCurrencySymbol = currencyType => {
  switch (currencyType) {
    case 'RUB':
      return '₽';
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    default:
      return '';
  }
};

const Card = ({
  className,
  accountNumber,
  money,
  percent,
  createdAt,
  lastOperation,
  lastOperationDiff,
  currencyType = 'RUB',
}) => {
  const classes = classnames(styles.wrapper, className);

  const isPositiveOperation = lastOperationDiff > 0;
  const operationSymbol = isPositiveOperation ? '+' : '-';

  const operationClasses = classnames(styles.operation, {
    [styles.positive]: isPositiveOperation,
  });
  return (
    <div className={classes}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.accountNumber}>{`Счет № ${accountNumber} `}</h3>
        <button
          className={styles.maximizeButton}
          onClick={() => console.log('Clcik')}
        >
          Full size
        </button>
      </div>
      <strong className={styles.money}>{`${money} ${getCurrencySymbol(
        currencyType,
      )}`}</strong>
      <span className={styles.text}>{`${percent}% годовых`}</span>
      <span className={styles.text}>{`Создан ${createdAt}`}</span>
      <span className={styles.text}>
        {`Последняя операция ${lastOperation} `}(
        <span className={operationClasses}>{`${operationSymbol} ${
          isPositiveOperation
            ? lastOperationDiff.toLocaleString()
            : (lastOperationDiff * -1).toLocaleString()
        } ${getCurrencySymbol(currencyType)}`}</span>
        )
      </span>
    </div>
  );
};

export default Card;
