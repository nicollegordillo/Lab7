import React from 'react';
import Button from './Button';
import styles from './Keypad.module.css';

const Keypad = ({ onButtonClick }) => {
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', 'CE' // Agrega botones para borrar
  ];

  return (
    <div className={styles.keypad}>
      {buttons.map(button => (
        <Button key={button} label={button} onClick={onButtonClick} />
      ))}
    </div>
  );
};

export default Keypad;
