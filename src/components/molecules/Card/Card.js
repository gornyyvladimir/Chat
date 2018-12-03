import React from 'react';
import classnames from 'classnames';
import styles from './Card.module.css';
import ColoredMoney from '../../atoms/ColoredMoney/ColoredMoney';
import MoneyFormatter from '../../atoms/MoneyFormatter/MoneyFormatter';

const Card = ({
  className,
  accountNumber,
  money,
  percent,
  createdAt,
  lastOperation,
  lastOperationDiff,
  children,
  currencyType = 'RUB',
  isOpened,
  onClick,
}) => {
  const classes = classnames(styles.wrapper, className);
  const buttonClasses = classnames(styles.button, {
    [styles.opened]: isOpened,
  });
  return (
    <div className={classes}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.accountNumber}>{`Счет № ${accountNumber} `}</h2>
        <button
          className={buttonClasses}
          onClick={() => onClick(accountNumber)}
        >
          Maximize toggle
        </button>
      </div>
      <MoneyFormatter money={money} currencyType={currencyType}>
        {formattedMoney => (
          <strong className={styles.money}>{formattedMoney}</strong>
        )}
      </MoneyFormatter>
      <span className={styles.text}>{`${percent}% годовых`}</span>
      <span className={styles.text}>{`Создан ${createdAt}`}</span>
      {!isOpened && (
        <span className={styles.text}>
          {`Последняя операция ${lastOperation} `}(
          <MoneyFormatter
            money={lastOperationDiff}
            currencyType={currencyType}
            isDiff
          >
            {formattedMoney => <ColoredMoney>{formattedMoney}</ColoredMoney>}
          </MoneyFormatter>
          )
        </span>
      )}
      {children}
    </div>
  );
};

export default Card;
