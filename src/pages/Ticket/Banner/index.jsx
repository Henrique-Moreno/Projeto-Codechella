import React from 'react';
import styles from './banner.module.scss';
import ImgDesktop from '../Image/Banner.png';
import ImgTablet from '../Image/BannerTablet.png';
import ImgMobile from '../Image/BannerMobile.png';

export default function Banner() {
  return (
    <section>
      <img className={styles.imgDesktop} src={ImgDesktop} alt="banner de pessoas dançando no festival codechella" />
      <img className={styles.imgTablet} src={ImgTablet} alt="banner de pessoas dançando no festival codechella" />
      <img className={styles.imgMobile} src={ImgMobile} alt="banner de pessoas dançando no festival codechella" />
    </section>
  )
}
