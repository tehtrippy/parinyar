export const siteMetadata = {
  title: `Parinyar`,
  description: ``,
  siteUrl: `https://parinyar.com`, // No trailing slash allowed!
  // defaultMetaImage: '/images/meta-default.png', // Path to the image placed in the 'static' folder
};

export const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-smoothscroll`,
  `gatsby-plugin-image`,
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /\.inline\.svg$/,
      },
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-transformer-json`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/data/`,
    },
  },
  'gatsby-transformer-remark',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown`,
      path: `${__dirname}/src/markdown`,
    },
  },
  // {
  //   resolve: `gatsby-plugin-manifest`,
  //   options: {
  //     name: `Parinyar`,
  //     short_name: `Parinyar`,
  //     description: 'Parinyar Website',
  //     start_url: '/',
  //     background_color: `#262626`,
  //     // This will impact how browsers show your PWA/website
  //     // https://css-tricks.com/meta-theme-color-and-trickery/
  //     theme_color: `#262626`,
  //     display: `minimal-ui`,
  //     icon: `src/images/icon-512x512.png`, // This path is relative to the root of the site.
  //   },
  // },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  `gatsby-plugin-offline`,
  `gatsby-plugin-typescript`,
  `gatsby-plugin-postcss`,
  {
    resolve: `gatsby-plugin-typegen`,
    options: {
      emitSchema: {
        'src/__generated__/gatsby-introspection.json': true,
        'src/__generated__/gatsby-schema.graphql': true,
      },
    },
  },
];
