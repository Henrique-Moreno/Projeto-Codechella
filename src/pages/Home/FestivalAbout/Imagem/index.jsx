import React from 'react';
import ImgDesktop from '../../../../assets/img/Rectangle 7.png';
import ImgMobile from '../../../../assets/img/RectangleMobile.png';
import styles from './imagem.module.scss'

export default function Imagem() {
  return (
    <div>
      <img className={styles.imgDesktop} src={ImgDesktop} alt="imagem de peesoas participando do evento codeChella" />
      <img className={styles.imgMobile} src={ImgMobile} alt="imagem de peesoas participando do evento codeChella" />
    </div>
  )
}
