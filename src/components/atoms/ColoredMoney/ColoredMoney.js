import React from 'react';
import classnames from 'classnames';
import styles from './ColoredMoney.module.css';

const ColoredMoney = ({ children }) => {
  const isPositive = children[0] === '+';

  const classes = classnames(styles.money, {
    [styles.positive]: isPositive,
  });

  return <span className={classes}>{children}</span>;
};

export default ColoredMoney;
