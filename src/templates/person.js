import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Myimg from '../components/myimg';
import TimelineMy from '../components/timeline';
import Galler from '../components/galler';

export default ({ data }) => {
  const info = data.dataJson;
  return (
    <Layout>
      <div>{info.firstName}</div>
      <div>{info.lastName}</div>
      <Myimg data={info.id} />
      <div><span>{info.birth} - {info.death}</span></div>
      <TimelineMy data={info.data} />
      info.gal==="y"?<Galler data={info.id} />:null
      <div>video</div>
      <div>mape</div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    dataJson(fields: { slug: { eq: $slug } }) {
      firstName
      lastName
      city
      pict
    }
  }
`;
