import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import PersonsList from '../components/persons-list';

const Persons = ({ data }) => {
  const persons = data.allDataJson.edges;
  return (
    <Layout>
      <h1>PERSONS</h1>
      <input />
      <PersonsList persons={persons} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

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
