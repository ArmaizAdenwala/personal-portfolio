/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions;

  return new Promise(resolve => {
    // if the page component is the index page component
    if (page.componentPath === `${__dirname}/src/pages/index/index.js`) {
      deletePage(page);

      // create a new page but with '/' as path
      createPage({
        ...page,
        path: '/',
      });
    }

    resolve();
  });
};
