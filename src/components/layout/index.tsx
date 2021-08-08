/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { useModalContext } from "../../providers/modal";
import { Navbar } from "../navbar";
import { Topbar } from "../topbar";
import * as S from "./index.styled";

export const Layout: React.FC = ({ children }) => {
  const [, { setChild, setDisplay }] = useModalContext();

  const topBarElem = (
    <Topbar
      isOpen
      toggle={() => {
        setDisplay(false);
      }}
    />
  );

  return (
    <>
      <Navbar
        toggle={() => {
          setChild(topBarElem, true);
        }}
      />
      <S.Main>{children}</S.Main>
      <S.Footer>© {new Date().getFullYear()}, Built by Jaiden</S.Footer>
    </>
  );
};
