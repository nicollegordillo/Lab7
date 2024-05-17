"use client";
import React, { useState, useEffect } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import styles from './Calculator.module.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [value, setValue] = useState(null);

  const handleButtonClick = (label) => {
    if (/\d/.test(label)) {
      if (displayValue.length >= 9) return;
      setDisplayValue(waitingForOperand ? label : displayValue === '0' ? label : displayValue + label);
      setWaitingForOperand(false);
    } else if (label === '.') {
      if (displayValue.length >= 9 || displayValue.includes('.')) return;
      setDisplayValue(displayValue + '.');
    } else if (['+', '-', '*', '/'].includes(label)) {
      if (value !== null && operator) {
        const result = evaluate(value, parseFloat(displayValue), operator);
        setDisplayValue(String(result).slice(0, 9));
        setValue(result);
      } else {
        setValue(parseFloat(displayValue));
      }
      setOperator(label);
      setWaitingForOperand(true);
    } else if (label === '=') {
      if (value === null || operator === null) return;
      const result = evaluate(value, parseFloat(displayValue), operator);
      setDisplayValue(String(result).slice(0, 9));
      setValue(null);
      setOperator(null);
      setWaitingForOperand(false);
    } else if (label === 'C') {
      // Limpiar toda la pantalla
      setDisplayValue('0');
      setOperator(null);
      setValue(null);
      setWaitingForOperand(false);
    } else if (label === 'CE') {
      // Borrar un dígito a la vez
      setDisplayValue(prevDisplayValue => {
        if (prevDisplayValue.length > 1) {
          // Si hay más de un dígito, borra el último
          return prevDisplayValue.slice(0, -1);
        } else {
          // Si solo queda un dígito, establece la pantalla en '0'
          return '0';
        }
      });
    }
  };
  
  useEffect(() => {
  const handleKeyDown = (event) => {
    const { key } = event;
    if (/\d|[-+*/.=]/.test(key)) {
      // Solo maneja los caracteres permitidos
      handleButtonClick(key);
    } else if (key === 'Backspace') {
      // Si se presiona la tecla 'Backspace', borra un dígito
      handleButtonClick('CE');
    } else if (key === 'Delete') {
      // Si se presiona la tecla 'Delete', borra toda la pantalla
      handleButtonClick('C');
    } else if (key === 'Enter') {
      handleButtonClick('=');
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [handleButtonClick]);

  const evaluate = (val1, val2, operator) => {
    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return val2;
    }
    if (result < 0 || result > 999999999) {
      return 'ERROR';
    }
    return result;
  };

  return (
    <div className={styles.calculator}>
      <Display value={displayValue} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
