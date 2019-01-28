import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import Portal from '../components/portal';
import About from '../components/about-us';
import Person from '../components/person';

const IndexPage = () => (
  <Layout>
    <Portal headerText="контент о портале" />
    <Person />
    <About />
    <div>{/* <Image /> */}</div>
  </Layout>
);

export default IndexPage;
