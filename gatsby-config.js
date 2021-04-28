module.exports = {
  siteMetadata: {
    title: `Emmanuel Dalougou`,
    description: `Emmanuel Dalougou blog`,
    author: `Emmanuel Dalougou @emmadal <emmanueldalougou@gmail.com>`,
  },
  pathPrefix: `/gatsby-starter-darkmode`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
        name: `Emmanuel Dalougou`,
        short_name: `Emmanuel Dalougou blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        includePaths: [],
        excludePaths: ['/'],
        height: 5,
        prependToBody: false,
        color: `rgb(29, 161, 242)`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['IBM Plex Sans', 'Pixel Matrix', 'Caveat', 'New Tegomin'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
