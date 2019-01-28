import React from 'react';
import { Link } from 'gatsby';

import styles from './persons-list.module.css';

const PersonsList = ({ persons }) => (
  <ul className={styles.persons}>
    {persons.map(person => {
      const { firstName } = person.node;
      const { lastName } = person.node;
      const { id } = person.node;
      const { slug } = person.node.fields;
      return (
        <li>
          <Link to={slug} key={id}>
            {`${firstName} ${lastName}`}
          </Link>
        </li>
      );
    })}
  </ul>
);

export default PersonsList;
