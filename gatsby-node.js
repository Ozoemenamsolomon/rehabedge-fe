const path = require(`path`);

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.onCreateNode = ({ node }) => {
//   console.log(`Node created of type "${node.internal.type}"`);
// };

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allStrapiArticle {
        edges {
          node {
            id
            Slug
          }
        }
      }
    }
  `);
  // console.log(JSON.stringify(result, null, 1));

  result.data.allStrapiArticle.edges.forEach(({ node }) => {
    createPage({
      path: `post/${node.Slug}`,
      component: path.resolve(`./src/templates/single-post.js`),
      context: {
        slug: node.Slug,
      },
    });
  });
};
