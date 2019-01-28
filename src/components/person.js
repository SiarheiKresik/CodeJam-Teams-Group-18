import React from 'react';
import Container from './container';
import styles from './person.module.css';

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
    <h3>Author of the day</h3>
    <Person
      username="Jane Doe"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
    />
  </Container>
);
