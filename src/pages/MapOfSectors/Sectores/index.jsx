import React from 'react';
import styles from './sectores.module.scss';
import Mapa from '../Image/Mapa setores.png';
import MapaMobile from '../Image/Mapa setores mobile.png';
import ImgAzul from '../Image/ImageAzul.png';
import ImgRosa from '../Image/ImageRosa.png';
import ImgVerde from '../Image/ImageVerde.png';
import ImgRoxo from '../Image/ImageRoxo.png';
import ImgAzulClaro from '../Image/ImageAzulClaro.png';

export default function Sectores() {
   return (
      <section className={styles.container}>
         <div>
            <img className={styles.imgDesktop} src={Mapa} alt="imagem de um mapa de mostrando os setores do evento" />
            <img className={styles.imgMobile} src={MapaMobile} alt="imagem de um mapa de mostrando os setores do evento" />
         </div>

         <article className={styles.containerLegenda}>
            <h2>Legenda:</h2>
            <aside className={styles.legenda}>
               <img src={ImgAzul} alt="imagem de quadrado azul" />
               <p>Pista Premium</p>
            </aside>

            <aside className={styles.legenda}>
               <img src={ImgRosa} alt="imagem de quadrado rosa" />
               <p>Pista Comum</p>
            </aside>

            <aside className={styles.legenda}>
               <img src={ImgVerde} alt="imagem de quadrado verde" />
               <p>Cadeiras térreo</p>
            </aside>

            <aside className={styles.legenda}>
               <img src={ImgRoxo} alt="imagem de quadrado roxo" />
               <p>Cadeiras superiores</p>
            </aside>

            <aside className={styles.legenda}>
               <img src={ImgAzulClaro} alt="imagem de quadrado azul claro" />
               <p>Rampas</p>
            </aside>
         </article>
      </section>
   )
}
