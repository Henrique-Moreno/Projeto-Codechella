import React from 'react';
import bannerDesktop from '../../../assets/img/Banner.png';
import bannerTable from '../../../assets/img/BannerTable.png';
import bannerMobile from '../../../assets/img/Banner Mobile.png';
import styles from './styles.module.scss';

export default function Banner() {
  return (
    <div >
      <img className={styles.imgDesktop} src={bannerDesktop} alt="banner do festival de musica e tecnologia" />
      <img className={styles.imgTablet} src={bannerTable} alt="banner do festival de musica e tecnologia" />

      <img className={styles.imgMobile} src={bannerMobile} alt="banner do festival de musica e tecnologia" />
    </div>
  )
}


