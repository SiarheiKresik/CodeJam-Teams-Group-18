import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import Portal from '../components/portal';
import About from '../components/about-us';
import Person from '../components/person-of-the-day';

const IndexPage = () => (
  <Layout>
    <Portal headerText="Этот портал предназначен для тех, кто хочет узнать о режиссерах театра Беларуси, приобщиться к культуре. Здесь вы узнаете о биографии и ознакомитесь с фото режиссеров." />
    <Person />
    <About />
    <div>{/* <Image /> */}</div>
  </Layout>
);

export default IndexPage;
