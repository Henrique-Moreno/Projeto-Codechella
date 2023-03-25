import React from 'react';
import styles from './detailsSectors.module.scss';
import ImgPista from '../Image/Mapa de setores.png';
import ImgPistaMobile from '../Image/Mapa de setores mobile.png';
import ImgPistaPremium from '../Image/Pista primium.png';
import ImgPistaPremiumMobile from '../Image/Pista primium mobile.png';
import ImgCadeiras from '../Image/cadeiras.png';
import ImgCadeirasMobile from '../Image/cadeiras mobile.png';

export default function DetailsSectors() {
   return (
      <section className={styles.container}>
         <h2>Mais detalhes sobre os setores:</h2>

         <article className={styles.containerSetores}>
            <article className={styles.setores}>
               <img className={styles.imgDesktop } src={ImgPista} alt="imagem de uma mulher no setor pista convencional" />
               <img className={styles.imgMobile} src={ImgPistaMobile} alt="imagem de uma mulher no setor pista convencional" />
               <h4>Pista</h4>
               <p>
                  Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.
               </p>
            </article>

            <article className={styles.setores}>
               <img className={styles.imgDesktop } src={ImgPistaPremium} alt="imagem do setor pista premium proximo do palco" />
               <img className={styles.imgMobile} src={ImgPistaPremiumMobile} alt="imagem do setor pista premium proximo do palco" />
               <h4>Pista Premium</h4>
               <p>
                  Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.
               </p>
            </article>

            <article className={styles.setores}>
               <img className={styles.imgDesktop } src={ImgCadeiras} alt="imagem de cadeiras térreas" />
               <img className={styles.imgMobile}  src={ImgCadeirasMobile} alt="imagem de cadeiras térreas" />
              <h4>Cadeiras</h4>
               <p>
                  Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas..
               </p>
            </article>
         </article>
      </section>
   )
}
