import React from "react"
import { graphql } from 'gatsby';
import { Link } from "gatsby"

import App from "../app/"
import AuthorsList from "../components/AuthorsList"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  const authors = data.allContentfulAuthor.edges;

  return (
  <App>
    <SEO title="Page two" />
    <Link to="/">Go back to the homepage</Link>
    <AuthorsList authors={authors}/>
  </App>
  );
};

export const query = graphql`
  query authorsQuery1 {
    allContentfulAuthor {
      edges {
        node {
          id
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

export default SecondPage
