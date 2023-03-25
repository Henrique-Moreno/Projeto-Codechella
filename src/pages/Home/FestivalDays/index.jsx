import React from 'react';
import styles from './festivalDays.module.scss';
import Lists from '../ListsDay';
import Icone from '../../../components/Ui/Icone';
import Imagem from './Imagem';

export default function FestivalDays() {
   return (
      <section className={styles.container}>
         <h1>/Line-Up/</h1>

         <article>
            <Lists>
               Sábado
               <Icone>11/03</Icone>
            </Lists>
            <h3>System of a DOM</h3>
            <ul className={styles.texto}>
               <li>Python Maiden</li>
               <li>Apollo Client 2001</li>
               <li>Bon Java</li>
               <li>NickCallback</li>
               <li>Linkin Promises</li>
               <li>Fullstack Fighters</li>
               <li>Papa React</li>
               <li>Angular in Chains</li>
               <li>Agnostic Front-end</li>
               <li>SlipkNode</li>
               <li>Pink Flutter</li>
               <li>Kiss</li>
            </ul>
         </article>

         <article>
            <Lists>
               Domingo
               <Icone>12/03</Icone>
            </Lists>
            <h3>Lana Del Ploy</h3>
            <ul className={styles.texto}>
               <li>Dua Libs</li>
               <li>The Backnd</li>
               <li>CSS Styles</li>
               <li>DJ Querys</li>
               <li>ArrayAna Grande</li>
               <li>Miley Cypress</li>
               <li>The Bootstrap Boys</li>
               <li>Json Derulo</li>
               <li>CloudPlay</li>
               <li>Dev Lovato</li>
               <li>Kylie MiLOG</li>
               <li>Jenkins Brothers</li>
               <li>Rubycat Dolls</li>
            </ul>
         </article>
         <Imagem/>
      </section>
   )
}
