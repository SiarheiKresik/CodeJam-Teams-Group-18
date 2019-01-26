import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <ul
    style={{
      outline: '1px dashed black',
      marginBottom: '1.45rem',
    }}
  >
    <Link to="/">HOME</Link>
    <Link to="/persons/">PERSONS</Link>
    <span>En</span>
  </ul>
);
