import React from 'react';
import styles from './sustainability.module.scss';
import Rectangle from '../Image/Sustentabilidade.png';
import RectangleMobile from '../Image/SustentabilidadeMobile.png';

export default function SustainabilitySection() {
   return (
      <section className={styles.container}>
         <article className={styles.containerTexto}>
            <h2>Sustentabilidade</h2>
            <p>
               Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.
            </p>

         </article>
         <div>
            <img className={styles.imgDesktop} src={Rectangle} alt="Imagem de uma pessoa feliz" />
            <img className={styles.imgMobile} src={RectangleMobile} alt="Imagem de uma pessoa feliz" />
         </div>
      </section>
   )
}
