import React from 'react';
import styles from './input.module.scss';

export default function Input({rest, label}) {
  return (
    <div>
      <label>{label}</label>
      <input
         className={styles.inputText}  
         {...rest}
      />
    </div>
  )
}


