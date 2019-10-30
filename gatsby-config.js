require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'CodeChung',
    author: 'Harry Chung'
  },
  plugins: [
    'gatsby-plugin-transition-link',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'fp6z9j2svv9p' || process.env.CONTENTFUL_SPACE_ID,
        accessToken: 'hFGRVqPrkIwzYZnTjLpy7MZK0yboU7IyF_tp-jXF0vc' || process.env.CONTENTFUL_ACCESS_TOKEN

      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
