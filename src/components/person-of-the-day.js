import React from 'react';
import Container from './container';
import styles from './person-of-the-day.module.css';

import Jewst from '../data/by/JewstsigniejMirovich.json';
import Larysa from '../data/by/LarysaAlieksandrowskaja.json';
import Liubow from '../data/by/LiubowMazaliewskaja.json';
import Uladzimir from '../data/by/UladzimirSavitski.json';
import LiubowPict from '../data/pict/004/1.gif';
import JewstPict from '../data/pict/003/1.jpg';
import UladzimirPict from '../data/pict/002/1.jpg';
import LarysaPict from '../data/pict/001/1.jpg';

const nameArr = [Jewst, Larysa, Liubow, Uladzimir];
const pictArr = [JewstPict, LarysaPict, LiubowPict, UladzimirPict];
const totalEl = nameArr.length;
const countName = Math.ceil(Math.random() * totalEl) - 1;

const Person = props => (
  <article className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <section className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </section>
  </article>
);

export default () => (
  <Container>
    <h3 className={styles.title}>Author of the day</h3>
    <Person
      username={`${nameArr[countName].firstName} ${
        nameArr[countName].lastName
      }`}
      excerpt={`${nameArr[countName].data[0].dateText} ${
        nameArr[countName].data[0].content
      } `}
      avatar={pictArr[countName]}
    />
  </Container>
);
