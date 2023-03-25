import React from 'react';
import styles from './response.module.scss'

export default function Summary() {

   const closeSummary = () => {
      active(false)
   }
   return (
      <div 
         className={styles.response}
         onClick={closeSummary}
      >
         <p>Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. <a href="/">Confira o line-up em detalhes clicando neste link!</a></p>
      </div>
   )
}
