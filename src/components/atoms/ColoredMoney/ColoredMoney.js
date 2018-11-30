import React from 'react';
import classnames from 'classnames';
import styles from './ColoredMoney.module.css';

const ColoredMoney = ({ money, currencySymbol = '' }) => {
  const isPositive = money > 0;
  const operationSymbol = isPositive ? '+' : '-';

  const classes = classnames(styles.money, {
    [styles.positive]: isPositive,
  });

  return (
    <span className={classes}>{`${operationSymbol} ${
      isPositive ? money.toLocaleString() : (money * -1).toLocaleString()
    } ${currencySymbol}`}</span>
  );
};

export default ColoredMoney;
