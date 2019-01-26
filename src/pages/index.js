import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import Portal from '../components/portal';
import About from '../components/about-us';

const IndexPage = () => (
  <Layout>
    <h1>MAIN PAGE</h1>
    <Portal headerText="123" /> 
    <p>TODO: the person of the day component</p>
    <About />
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
  </Layout>
  );

export default IndexPage;
