import React from 'react';
import { Link } from 'gatsby';

const PersonsList = ({ persons }) => (
  <div>
    {persons.map(person => {
      const { firstName } = person.node;
      const { lastName } = person.node;
      const { id } = person.node;
      const { slug } = person.node.fields;
      return (
        <Link to={slug} key={id}>
          <div>{`${firstName} ${lastName}`}</div>
        </Link>
      );
    })}
  </div>
);

export default PersonsList;
