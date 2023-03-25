import React from 'react';
import { useContext } from 'react';
import styles from './yourTicket.module.scss'
import Header from '../../components/Header';
import Banner from './Banner';
import IconeTickets from './IconeTickets';
import QrCode from './Image/Qr code 1.png';
import Footer from '../../components/Footer';

import {AuthContext} from '../../context/Auth';

export default function YourTicket() {

   const {user, ingress} = useContext(AuthContext);

  return (
    <>
    <Header/>
      <main>
         <Banner/>
         <section className={styles.Contaneir}>
            <h6>Uhul, agora sim! Seu ingresso está aqui, apresente <br/> na entrada do evento e divirta-se!</h6>
            <div className={styles.containerTickts}>
               <IconeTickets/>

               <div className={styles.Tickts}>
                  <img src={QrCode} alt="imagem de um qr code para ler o ingresso" />
                  <div>
                     <h6>{user.name}</h6>
                     <p>Ingresso Costesia</p>
                     <p>Setor {ingress.ingresso}</p>
                     <p>Data: 11/03</p>
                     <p>Local: São Paulo-SP</p>
                  </div>
               </div>
            </div>
           
         </section>
      </main>
      <Footer/>
    </>
  )
}
