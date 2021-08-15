module.exports = {
  siteMetadata: {
    title: `Jaiden Muscat`,
    description: `My short blurb`,
    author: `@JaidenRM`,
    siteUrl: `https://github.com/JaidenRM`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/`,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: false, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `fetch-reddit-plugin`,
      options: {
        subreddit: `softwaregore`,
        limit: 100,
        sortedBy: `hot`,
        allowOver18: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-graphql-codegen`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 90,
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JaidenMuscat`,
        short_name: `JaidenMuscat`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
