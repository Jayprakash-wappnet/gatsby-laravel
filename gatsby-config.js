/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "RESTAPI",
    //     fieldName: "restapi",
    //     url: "https://dummy.restapiexample.com/api/v1/graphql",
    //     createLink: () => {
    //       const { HttpLink } = require("apollo-link-http");
    //       const fetch = require("node-fetch");
    //       return new HttpLink({ uri: "https://dummy.restapiexample.com/api/v1/employees", fetch });
    //     }
    //   }
    // },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Offer",
        fieldName: "offers",
        url: "https://www.soulbusinessapp.com/api/v1/get_offers"
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Banner",
        fieldName: "Banner",
        url: "https://www.soulbusinessapp.com/api/v1/get_banner"
      }
    },
    {
      resolve: "gatsby-plugin-playground",
      options: {
        endpoint: "/api/graphql"
        // You can specify other options here, if needed
      }
    }
  ]
};
