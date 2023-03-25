import React from 'react';
import styles from './attractions.module.scss';
import Rectangle from '../Image/Atrações.png';
import RectangleMobile from '../Image/AtraçõesoMobile.png';

export default function AttractionsSection() {
   return (
      <section className={styles.container}>
         <div>
            <img className={styles.imgDesktop} src={Rectangle} alt="Imagem de uma montanha russa" />
            <img className={styles.imgMobile} src={RectangleMobile} alt="Imagem de uma montanha russa" />
         </div>
         <article className={styles.containerTexto}>
            <h2>Atrações</h2>
            <p>
               Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!
            </p>

         </article>
      </section>
   )
}
