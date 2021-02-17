module.exports = {
  siteMetadata: {
    title: `Piksellat Digital Agency`,
    description: `Full Service Digital Agency`,
    author: `Piksellat`,
      },
      
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/image/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
