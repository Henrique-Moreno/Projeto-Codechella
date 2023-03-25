import React from 'react';
import { useState } from 'react';
import styles from './header.module.scss';
import Link from '../Ui/Link';
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
                  <Link href="/">
                     <img src={Logo} alt="Logo da empresa" />
                  </Link>
                  <div
                     onClick={showDetails}
                  >
                     <img className={styles.imgMenu} src={Menu} alt="" />
                  </div>
               </div>
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
         {details && <NavBar active={setDetails}/>}
      </div>
   )
}
