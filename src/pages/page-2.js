import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import App from '../app/';
import AuthorsList from '../components/AuthorsList';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { languagesStore, languagesInitState } from '../storage';

const SecondPage = ({ data }) => {
  const authors = data;

  console.log(data);

  return (
    <App>
      <SEO title="Page two" />
      <Link to="/">Go back to the homepage</Link>
      <AuthorsList authors={authors} />
    </App>
  );
};

export const query = graphql`
  query newAuthorQuery1 {
    allContentfulAuthorEnglish(sort: { fields: order, order: DESC }) {
      edges {
        node {
          id
          order
          name
          surname
          yearsOfLife
          city
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
    allContentfulAuthorRussian(sort: { fields: order, order: DESC }) {
      edges {
        node {
          id
          order
          name
          surname
          yearsOfLife
          city
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
    allContentfulAuthorBelarusian(sort: { fields: order, order: DESC }) {
      edges {
        node {
          id
          order
          name
          surname
          yearsOfLife
          city
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

export default SecondPage;
