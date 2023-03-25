import React from 'react';
import styles from './navBar.module.scss';
import Link from '../../Ui/Link';

export default function NavBar() {

   const closeSummary = () => {
      active(false)
   }

   return (
      <header className={styles.header}>
         <nav 
            className={styles.containerNavBar}
            onClick={closeSummary}
         >

            <ul className={styles.listHeader}>
               <li>
                  <Link href="/experiencia">
                     A experiencia
                  </Link>
               </li>
               <li>
                  <Link href="/mapa">
                     Mapa de Setores
                  </Link>
               </li>
               <li>
                  <Link href="/informacoes">
                     Informações
                  </Link>
               </li>
               <li>
                  <Link href="/ingresso">
                     Ingresso
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   )
}
