const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/poet-all-info.js`);
  return graphql(
    `
      query programQuery {
        allContentfulAuthorEnglish(sort: { fields: order, order: DESC }) {
          edges {
            node {
              id
              order
              slug
              name
              surname
              yearsOfLife
              city
              videoId
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
              slug
              name
              surname
              yearsOfLife
              city
              videoId
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
              slug
              name
              surname
              yearsOfLife
              city
              videoId
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
        contentfulPoetPageInterfaceEnglish {
          biographyTitle
          worksTitle
          firstColumnTitle
          secondColumnTitle
          watchVideoTitle
          galleryTitle
        }
        contentfulPoetPageInterfaceRussian {
          biographyTitle
          worksTitle
          firstColumnTitle
          secondColumnTitle
          watchVideoTitle
          galleryTitle
        }
        contentfulPoetPageInterfaceBelarusian {
          biographyTitle
          worksTitle
          firstColumnTitle
          secondColumnTitle
          watchVideoTitle
          galleryTitle
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allContentfulAuthorEnglish.edges;

    posts.forEach((post, index) => {
      const resultData = result.data;

      const indexData = index;

      createPage({
        path: `/${post.node.slug}/`,
        component: blogPost,
        context: {
          resultData,
          indexData,
        },
      });
    });
  });
};
