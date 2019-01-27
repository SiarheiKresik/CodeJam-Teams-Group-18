import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default ({ data }) => {
  const info = data.dataJson;
  return (
    <Layout>
      <div>{info.firstName}</div>
      <div>{info.lastName}</div>
      <div>{info.city}</div>
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
