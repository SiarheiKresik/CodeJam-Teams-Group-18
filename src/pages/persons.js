import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import PersonsList from '../components/persons-list';

const KEYS = ['firstName', 'lastName', 'city'];

const normalizeText = text => text.trim().toLocaleLowerCase();

const filterPersons = (persons, text) => {
  const normText = normalizeText(text);
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const person of persons) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key of KEYS) {
      const fieldValue = person.node[key] || '';
      if (normalizeText(fieldValue).includes(normText)) {
        result.push(person);
        break;
      }
    }
  }
  return result;
};

class Persons extends React.Component {
  constructor({ data }) {
    super();
    this.persons = data.allDataJson.edges;
    this.state = { persons: this.persons };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = e => {
    const text = e.target.value || '';
    this.setState(prevState => ({
      ...prevState,
      persons: filterPersons(this.persons, text),
    }));
  };

  render() {
    const { persons } = this.state;
    return (
      <Layout>
        <h1>PERSONS</h1>
        <input
          type="search"
          placeholder="імя / прозвішча / горад"
          onChange={this.handleInput}
        />
        <PersonsList persons={persons} />
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    );
  }
}

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
