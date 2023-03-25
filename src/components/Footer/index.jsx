import React from 'react';
import Logo from './Imagem/Logo1 2.png';
import Whats from './Imagem/Ícones whats.png';
import Discord from './Imagem/Ícones discord.png';
import Instagram from './Imagem/Ícones instagram.png';
import Twiter from './Imagem/Ícones twiter.png';
import styles from './footer.module.scss'

export default function Footer() {
   return (
      <footer className={styles.rodape}>
         <div className={styles.container}>
            <img src={Logo} alt="imagem da logo da empresa" />
            <div className={styles.redes}>
               <p>Acesse nossas redes:</p>
               <img src={Whats} alt="icone da rede social WhatsApp" />
               <img src={Discord} alt="icone da rede social Discord" />
               <img src={Instagram} alt="icone da rede social Intagram" />
               <img src={Twiter} alt="icone da rede social Twiter" />
            </div>
         </div>

         <div className={styles.texto}>
            <p>Desenvolvido por Alura.</p>
            <p>Projeto fictício sem fins comerciais.</p>
         </div>

      </footer>
   )
}
