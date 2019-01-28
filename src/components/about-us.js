import React from 'react';
import styles from './about-us.module.css';
import Container from './container';
import pict from '../images/github-logo.png';
import marry from '../images/Marry.jpg';
import iam from '../images/iam.jpg';
import serg from '../images/serg.gif';

const User = props => (
  <article className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="name-developers" />
    <section className={styles.description}>
      <h2 className={styles.username}>
        <a href={props.link}>{props.username}</a>
      </h2>
      <a href={props.link}>
        <img src={props.image} className={props.image} alt="git-hub" />
      </a>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </section>
  </article>
);

export default () => (
  <Container>
    <h3 className={styles.title}>About us</h3>
    <User
      link="https://github.com/SiarheiKresik"
      username="Siarhej Kresik"
      image={pict}
      avatar={serg}
      excerpt="CodeJam-Culture-Portal/RSSchool 2018Q3"
    />
    <User
      link="https://github.com/zzVIPz"
      username="Siarhei Tsialeha"
      image={pict}
      avatar={iam}
      excerpt="CodeJam-Culture-Portal/RSSchool 2018Q3"
    />
    <User
      link="https://github.com/marry705"
      username="Шило Марина"
      image={pict}
      avatar={marry}
      excerpt="CodeJam-Culture-Portal/RSSchool 2018Q3"
    />
  </Container>
);
