import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, onClick, isActive, setActiveButton }) => {
  const handleMouseDown = () => setActiveButton(null);
  return (
    <button className={`${styles.button} ${isActive ? styles.active : ''}`} onClick={() => onClick(label)} data-testid={`button-${label}`}>
      {label}
    </button>
  );
};

export default Button;
