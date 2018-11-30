import React from 'react';
import MoneyFormatter from '../../atoms/MoneyFormatter/MoneyFormatter';
import ColoredMoney from '../../atoms/ColoredMoney/ColoredMoney';
import styles from './Operation.module.css';

const Operation = ({
  date,
  operation,
  operationDiff,
  currencyType = 'RUB',
}) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.date}>{date}</span>
      <span className={styles.text}>
        {`${operation} `}
        <MoneyFormatter
          money={operationDiff}
          currencyType={currencyType}
          isDiff
        >
          {formattedMoney => <ColoredMoney>{formattedMoney}</ColoredMoney>}
        </MoneyFormatter>
      </span>
    </div>
  );
};

export default Operation;
