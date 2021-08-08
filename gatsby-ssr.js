/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
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
