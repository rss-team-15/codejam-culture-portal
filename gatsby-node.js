/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/poet-all-info.js`)
  return graphql(
    `query programQuery {
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
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allContentfulAuthor.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      const {
        name, 
        surname, 
        yearsOfLife, 
        biography,
        mainPicture,
        videoId,
        listOfWorks,
        placesOfActivity,
        gallery,
      } = post.node;

      const data = {
        name, 
        surname, 
        yearsOfLife, 
        biography,
        mainPicture,
        videoId,
        listOfWorks,
        placesOfActivity,
        gallery,
      };

      createPage({
        path: `/${post.node.name}_${post.node.surname}/`,
        component: blogPost,
        context: {
          data,
        }
      })
    })
  })
}