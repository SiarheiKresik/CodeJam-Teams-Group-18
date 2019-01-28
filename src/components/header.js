import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Navigation from './navigation';

const Header = ({ siteTitle }) => (
  <div>
    <Navigation />
    <div>
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
