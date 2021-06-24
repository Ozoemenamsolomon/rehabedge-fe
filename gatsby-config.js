module.exports = {
  siteMetadata: {
    title: `RehabEdge`,
    description: `Rehab Edge is a media publication for physical and Orthopaedic rehabilitation professionals which delivers valuable news, insights, articles, job postings, and magazine publications to your doorstep.`,
    author: `Ozoemenam Solomon Obinna | https://solozo.page`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
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
        name: `RehabEdge`,
        short_name: `RehabEdge`,
        start_url: `/`,
        background_color: `#2f4293`,
        theme_color: `#2f4293`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,

    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://rehabedge-be.herokuapp.com",
        collectionTypes: ["article", "category", "newsletter"],
        singleTypes: ["about-us"],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: "G-8LXL13QNTX", head: false, respectDNT: true },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/`],
      },
    },
  ],
};
