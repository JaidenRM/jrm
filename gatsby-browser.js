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

export const wrapPageElement = ({ element, props }) => {
  return (
    <DefaultThemeProvider>
      <Layout {...props}>{element}</Layout>
    </DefaultThemeProvider>
  );
};
