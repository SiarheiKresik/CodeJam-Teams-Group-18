import React from 'react';
import styles from './about-us.module.css';
import Container from './container';
import pict from '../images/github-logo.png';

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
      username="Bob Smith"
      image={pict}
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
);
