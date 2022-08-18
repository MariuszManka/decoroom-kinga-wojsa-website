require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Kinga Wojsa | Aranżacje Wnętrz`,
    description: `Od 8 lat zajmuję się projektowaniem mebli oraz aranżacją wnętrz.
Początkowo projektowanie było moją pasją i zajmowałam się tym hobbistycznie ale szybko okazało się że właśnie tym chcę się zajmować zawodowo, dlatego otwarłam własne biuro projektowe.`,
    author: `Mariusz Mańka`,
    siteUrl: `https://decoroom-aranzacjewnetrz.pl/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-theme-material-ui`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,500`,
          `Montserrat\: 400,600`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-root-import`,
  ],
}
