import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Photo from '../components/photo';
import Timeline from '../components/timeline';
import PhotoGallery from '../components/photo-gallery';
import '../data/pict/001/1.jpg';

export default ({ data }) => {
  const person = data.dataJson;
  return (
    <Layout>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2>
          {person.firstName} {person.lastName}
        </h2>

        <div>
          <span>
            {person.birth || '...'}
            {' — '}
            {person.death || '...'}
          </span>
        </div>
        <Timeline data={person.data} />
        <Photo data={person.id} />
        {/* {person.gal === true ? <PhotoGallery data={person.id} /> : null} */}

        <div>video</div>
        <div>mape</div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    dataJson(fields: { slug: { eq: $slug } }) {
      firstName
      lastName
      birth
      id
      death
      gal
      city
      coordinat
      youtube
      data {
        key
        dateText
        content
      }
    }
  }
`;
