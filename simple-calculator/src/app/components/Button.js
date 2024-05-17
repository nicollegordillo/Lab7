import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={() => onClick(label)} data-testid={`button-${label}`}>
      {label}
    </button>
  );
};

export default Button;
