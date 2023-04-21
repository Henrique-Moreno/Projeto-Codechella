import React from 'react';
import { useState } from 'react';
import styles from './header.module.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Menu from '../../assets/img/menu.png';
import NavBar from './NavBar';

export default function Header() {

   const [details, setDetails] = useState(false)

   const showDetails = () => setDetails(!details)

   return (
      <div>
         <header className={styles.header}>
            <nav className={styles.containerHeader}>
               <div className={styles.navBar}>
                  <NavLink to="/">
                     <img src={Logo} alt="Logo da empresa" />
                  </NavLink>
                  <div
                     onClick={showDetails}
                  >
                     <img className={styles.imgMenu} src={Menu} alt="" />
                  </div>
               </div>
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
         {details && <NavBar active={setDetails}/>}
      </div>
   )
}
