import React from 'react';
import { Link } from 'gatsby';
import styles from './navigation.module.css';

const ListLink = props => (
  <li className={styles.paragraph}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default () => (
  <nav className={styles.nav}>
    <ul className={styles.ul}>
      <li className={styles.li}>
        <Link to="/">HOME</Link>
      </li>
      <li className={styles.li}>
        <Link to="/persons/">PERSONS</Link>
      </li>
      <li className={styles.li}>
        <Link to="#">En</Link>
      </li>
    </ul>
  </nav>
);
