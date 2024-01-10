import React from "react";

import styles from '../../styles/Home.module.css'

import BG from '../../images/computer.png';

const Poster = () => {
  return (
    <section className={styles.home}>
    <h1 className={styles.title}>BIG SALE 20%</h1>
    <div className={styles.product}>
      <div className={styles.text}>
        <span className={styles.subtitle}>the bestseller of 2022 </span>
        <h1 className={styles.head}>LENNON r2d2<br></br>with NVIDIA 5090 TI</h1>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.image}>
        <img src={BG} alt="Computer" />
      </div>
    </div>
  </section>
  )
};


export default Poster;