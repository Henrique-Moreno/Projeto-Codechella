import React from 'react';
import imagemDesktop from '../../../../assets/img/Imagem.png';
import imagemTablet from '../../../../assets/img/ImagemDois.png';
import imagemMobile from '../../../../assets/img/ImagemTres.png';
import styles from './imagem.module.scss';

export default function Imagem() {
  return (
    <div className={styles.container}>
      <img className={styles.imgDesktop} src={imagemDesktop} alt="imagem de pessoas dançado" />
      <img className={styles.imgTablet} src={imagemTablet} alt="imagem de pessoas dançado" />
      <img className={styles.imgMobile} src={imagemMobile} alt="imagem de pessoas dançado" />
    </div>
  )
}
