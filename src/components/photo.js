import React from 'react';
import pict1 from '../data/pict/001/1.jpg';
import pict11 from '../data/pict/001/2.jpg';
import pict111 from '../data/pict/001/3.jpg';
import pict1111 from '../data/pict/001/4.jpg';
import pict2 from '../data/pict/002/1.jpg';
import pict22 from '../data/pict/002/2.jpg';
import pict222 from '../data/pict/002/3.jpg';
import pict2222 from '../data/pict/002/4.jpg';
import pict3 from '../data/pict/003/1.jpg';
import pict33 from '../data/pict/003/2.jpg';
import pict333 from '../data/pict/003/3.jpg';
import pict3333 from '../data/pict/003/4.jpg';
import pict4 from '../data/pict/004/1.jpg';
import pict44 from '../data/pict/004/2.jpg';
import pict444 from '../data/pict/004/3.jpg';
import pict4444 from '../data/pict/004/4.jpg';
import pict5 from '../data/pict/005/1.jpg';
import pict55 from '../data/pict/005/2.jpg';
import pict555 from '../data/pict/005/3.jpg';
import pict5555 from '../data/pict/005/4.jpg';
import styles from './photo.module.css';

import './layout.css';

const Photo = ({ data }) => {
  if (data === '001') {
    return (
      <div>
        <img className={styles.photo} src={pict1} alt="" />
        <img className={styles.photo} src={pict11} alt="" />
        <img className={styles.photo} src={pict111} alt="" />
        <img csrc={pict1111} alt="" />
      </div>
    );
  }
  if (data === '002') {
    return (
      <div>
        <img className={styles.photo} src={pict2} alt="" />
        <img className={styles.photo} src={pict22} alt="" />
        <img className={styles.photo} src={pict222} alt="" />
        <img className={styles.photo} src={pict2222} alt="" />
      </div>
    );
  }
  if (data === '003') {
    return (
      <div>
        <img className={styles.photo} src={pict3} alt="" />
        <img className={styles.photo} src={pict33} alt="" />
        <img className={styles.photo} src={pict333} alt="" />
        <img className={styles.photo} src={pict3333} alt="" />
      </div>
    );
  }

  if (data === '004') {
    return (
      <div>
        <img className={styles.photo} src={pict4} alt="" />
        <img className={styles.photo} src={pict44} alt="" />
        <img className={styles.photo} src={pict444} alt="" />
        <img className={styles.photo} src={pict4444} alt="" />
      </div>
    );
  }
  if (data === '005') {
    return (
      <div>
        <img className={styles.photo} src={pict5} alt="" />
        <img className={styles.photo} src={pict55} alt="" />
        <img className={styles.photo} src={pict555} alt="" />
        <img className={styles.photo} src={pict5555} alt="" />
      </div>
    );
  }
};

export default Photo;
