import React from 'react'
import styles from './Toggle.module.css';

const Toggle = () => {
  return (
    <div className={styles.toggle}>
      <button className={`${styles.button} ${styles.active}`}>Счета</button>
      <button className={styles.button}>Вклады</button>
    </div>
  )
}

export default Toggle
