import React from 'react';
import styles from './inclusion.module.scss';
import Rectangle from '../Image/Rectangle.png';
import RectangleMobile from '../Image/RectangleMobile.png';

export default function InclusionSection() {
   return (
      <section className={styles.container}>
         <div>
            <img className={styles.imgDesktop} src={Rectangle} alt="Imagem de uma pessoa feliz" />
            <img className={styles.imgMobile} src={RectangleMobile} alt="Imagem de uma pessoa feliz" />
         </div>
         <article className={styles.containerTexto}>
            <h2>Acessibilidade e Inclusão</h2>
            <p>
               Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!
            </p>

         </article>
      </section>
   )
}
