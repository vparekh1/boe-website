module.exports = {
  siteMetadata: {
    // TODO: Add TLD
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Bunch of Emmas',
    author: {
      name: 'Vivek Parekh and Emma Harrison',
      // TODO: Add Summary
      summary: 'tbd'
    },
    // TODO: Add Description
    description: 'tbd',
    social: {
      // TODO: Add twitter handle
      twitter: 'tbd'
    }
  },
  pathPrefix: '/boe-website',
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Bunch of Emmas',
        short_name: 'BOE',
        start_url: '/',
        background_color: '#222222',
        theme_color: '#ff0088',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png'
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-theme-material-ui',
      options: {
        stylesConfig: {
          // disableAutoprefixing: true,
          // disableMinification: true
        }
      }
    }
  ]
}
