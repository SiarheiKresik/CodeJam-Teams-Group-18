import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
// import Layout from '../components/';

export default ({ data }) => {
  const info = data.dataJson;
  return (
     <Layout>
         <div>{info.firstName}</div>
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
    //   <info>{info.firstName}</info>
    //   {info.gall}?<pict >:null;
    //   <timeline>
    //   {info.id}?<gall >:null;
    //   <video>{info.city}</video>