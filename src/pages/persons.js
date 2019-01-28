import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import PersonsContainer from '../components/persons-container';

const Persons = ({ data }) => (
  <Layout>
    <PersonsContainer persons={data.allDataJson.edges} />
    <div style={{ 'text-align': 'center' }}>
      <Link to="/">Go back to the homepage</Link>
    </div>
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
          city
          fields {
            slug
          }
        }
      }
    }
  }
`;
