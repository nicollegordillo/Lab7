"use client";
import React, { useState } from 'react';
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
    }
  };

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
