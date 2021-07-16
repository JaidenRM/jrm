/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react";
import { Navbar } from "./navbar";
import { Topbar } from "./topbar";

export const Layout: React.FC = ({ children }) => {
  const [isTopbarOpen, setIsTopbarOpen] = useState(false);
  const toggleIsTopbarOpen = () => setIsTopbarOpen(prev => !prev);

  return (
    <>
      <Topbar isOpen={isTopbarOpen} toggle={toggleIsTopbarOpen} />
      <Navbar toggle={toggleIsTopbarOpen} />
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0 1.0875rem 1.45rem",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: "2rem",
          }}
        >
          © {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};
