module.exports = {
  siteMetadata: {
    title: `Armaiz Adenwala, Software Engineer`,
    description: `Armaiz Adenwala, Software Engineer`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Armaiz Adenwala`,
        short_name: `Armaiz Adenwala`,
        start_url: `/`,
        background_color: `#283593`,
        theme_color: `#283593`,
        display: `minimal-ui`,
        icon: `src/images/armaiz-adenwala-software-engineer-icon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_self',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
