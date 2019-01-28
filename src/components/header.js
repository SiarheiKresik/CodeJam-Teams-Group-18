import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './header.module.css';

import Navigation from './navigation';

const Header = ({ siteTitle }) => (
  <div>
    <Navigation />
    <div className={styles.logo}>
      <h1>{siteTitle}</h1>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
