import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const Persons = () => (
  <Layout>
    <h1>PERSONS</h1>
    <p>TODO: list of persons and the search input</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Persons;

export const query = graphql`
  query {
    allDataJson(sort: { fields: [lastName, firstName], order: ASC }) {
      totalCount
      edges {
        node {
          id
          firstName
          lastName
          fields {
            slug
          }
        }
      }
    }
  }
`;
