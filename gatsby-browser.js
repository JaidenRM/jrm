/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * IMPORTANT: `wrapPageElement` and `wrapRootElement` exist in
 *  both the browser and ssr APIs so both should be the same if
 *  implemented!
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react";
import { Layout } from "./src/components/layout";
import { DefaultThemeProvider } from "./src/providers/theme";
import { ModalProvider } from "./src/providers/modal";

export const wrapPageElement = ({ element, props }) => {
  return (
    <DefaultThemeProvider>
      <ModalProvider>
        <Layout {...props}>{element}</Layout>
      </ModalProvider>
    </DefaultThemeProvider>
  );
};

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image and react-awesome-reveal (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
