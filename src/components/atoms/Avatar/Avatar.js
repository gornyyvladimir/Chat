import React from 'react';
import styles from './Avatar.module.css';

const Avatar = props => (
  <img className={styles.avatar} src={props.image} alt="User avatar" />
);
export default Avatar;
