import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import App from '../app/';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import Home from '../components/home';

const IndexPage = ({ data }) => {
  const authors = data.allContentfulAuthor.edges;

  return (
    <App>
      <SEO title="Home" />
      <Home authors={authors} />
    </App>
  );
};

export const query = graphql`
  query authorsQuery {
    allContentfulAuthor {
      edges {
        node {
          id
          name
          surname
          yearsOfLife
          mainPicture {
            file {
              url
            }
          }
          biography {
            date
            content
          }
          listOfWorks {
            id
            date
            work
          }
          gallery {
            file {
              url
            }
          }
          placesOfActivity {
            id
            activity
            mapLink {
              lat
              lng
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
