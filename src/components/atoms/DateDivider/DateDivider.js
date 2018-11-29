import React from 'react';
import styles from './DateDivider.module.css';

const DateDivider = ({ date }) => {
  return <p className={styles.date}>{`— ${date} —`}</p>;
};

export default DateDivider;
