import React from 'react';
import styles from './navBar.module.scss';
import { NavLink } from 'react-router-dom';

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
                  <NavLink to="/experiencia">
                     A experiencia
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/mapa">
                     Mapa de Setores
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/informacoes">
                     Informações
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/ingresso">
                     Ingresso
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   )
}
