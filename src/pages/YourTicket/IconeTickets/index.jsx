import React from 'react';
import styles from './iconesTicket.module.scss'
import Logo from '../Image/Logo1 3.png';
import Ellipe from '../Image/Ellipse 4.png';

export default function IconeTickets() {
  return (
    <div className={styles.Icone}>
      <img src={Logo} alt="logo da empressa " />
      <img src={Ellipe} alt="" />
    </div>
  )
}
