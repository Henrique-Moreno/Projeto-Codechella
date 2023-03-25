import React from 'react';
import styles from './lists.module.scss';

export default function Lists({children}) {
   return (
      <div className={styles.container}>
         <div className={styles.linhaHorizontal}></div>
         <div className={styles.Titulo}>
            <h2>
               {children}
            </h2>
         </div>
         <div className={styles.linhaHorizontal}></div>
      </div>
   )
}




